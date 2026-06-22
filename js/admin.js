/* COREX Admin Dashboard — MockAPI CRUD and membership management. */
(function () {
  "use strict";

  const API = window.CorexMockApi;
  const config = window.COREX_VENV || {};
  const state = { products: [], users: [], activeTab: "overview", currentModal: null };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const VND_PER_PRICE_UNIT = 25000;
  const formatVnd = (value) => `${Math.round(Number(value || 0)).toLocaleString("vi-VN")} ₫`;
  // Legacy product records store a compact price unit. Admin always views and edits VNĐ.
  const formatCatalogVnd = (priceUnit) => formatVnd(Number(priceUnit || 0) * VND_PER_PRICE_UNIT);
  const toCatalogPriceUnit = (vndValue) => Number(vndValue || 0) / VND_PER_PRICE_UNIT;
  const dateText = (value) => value ? new Date(value).toLocaleDateString("vi-VN") : "—";
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[ch]));

  function readMainSessionUser() {
    try {
      const storage = window.parent && window.parent !== window ? window.parent.localStorage : window.localStorage;
      const raw = storage.getItem("corex_user");
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function hasExplicitAdminSession() {
    try {
      const storage = window.parent && window.parent !== window ? window.parent.localStorage : window.localStorage;
      const user = readMainSessionUser();
      const expected = String(config.ADMIN_EMAIL || "admin@corex.com").toLowerCase();
      return storage.getItem("corex_admin_session") === "true"
        && user && String(user.role || "").toLowerCase() === "admin"
        && String(user.email || "").toLowerCase() === expected;
    } catch (_) {
      return false;
    }
  }

  function showToast(message, type = "success") {
    const element = $("#admin-toast");
    element.textContent = message;
    element.className = `admin-toast ${type === "error" ? "error" : ""} show`;
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => element.classList.remove("show"), 3500);
  }

  function setApiStatus(message, status = "") {
    const element = $("#api-status");
    element.textContent = message;
    element.className = `api-status ${status}`;
  }

  function currentMembership(user) {
    return API.getMembership(user);
  }

  function userDisplayName(user) {
    return user.name || user.fullName || "Unnamed account";
  }

  function orderCount(user) {
    return API.asArray(user.orders).length;
  }

  function normalizeProduct(record) {
    return API.normalizeProduct(record);
  }

  function openModal({ title, kicker = "", body, onSubmit, submitLabel = "Save changes" }) {
    state.currentModal = { onSubmit };
    $("#admin-modal-kicker").textContent = kicker;
    $("#admin-modal-title").textContent = title;
    $("#admin-modal-form").innerHTML = `${body}
      <div class="modal-actions">
        <button type="button" class="outline-btn" id="modal-cancel-btn">Cancel</button>
        <button type="submit" class="primary-btn">${escapeHtml(submitLabel)}</button>
      </div>`;
    $("#admin-modal").hidden = false;
    $("#modal-cancel-btn").onclick = closeModal;
    $("#admin-modal-form").onsubmit = async (event) => {
      event.preventDefault();
      try {
        await onSubmit(new FormData(event.currentTarget));
        closeModal();
      } catch (error) {
        console.error(error);
        showToast(error.message || "Could not save the record.", "error");
      }
    };
  }

  function closeModal() {
    $("#admin-modal").hidden = true;
    state.currentModal = null;
  }

  function productFormBody(product = {}) {
    const has = (key) => API.asBoolean(product[key]);
    return `
      <div class="form-grid">
        <label class="full">Product name<input name="name" value="${escapeHtml(product.name)}" required></label>
        <label>Collection<select name="collection">
          ${["women", "men", "yoga", "accessories", "new", "sale"].map(option => `<option value="${option}" ${String(product.collection || product.group || "").toLowerCase() === option ? "selected" : ""}>${option}</option>`).join("")}
        </select></label>
        <label>Category<input name="category" value="${escapeHtml(product.category || "Yoga")}" required></label>
        <label>Subcategory<input name="subCategory" value="${escapeHtml(product.subCategory || "Tops")}"></label>
        <label>Gender<select name="gender"><option value="women" ${product.gender === "women" ? "selected" : ""}>Women</option><option value="men" ${product.gender === "men" ? "selected" : ""}>Men</option><option value="unisex" ${product.gender === "unisex" ? "selected" : ""}>Unisex</option></select></label>
        <label>Price (VNĐ)<input name="price" type="number" min="0" step="1000" value="${Math.round(Number(product.price || 0) * VND_PER_PRICE_UNIT)}" required></label>
        <label>Old price (VNĐ)<input name="oldPrice" type="number" min="0" step="1000" value="${product.oldPrice === null || product.oldPrice === undefined || product.oldPrice === "" ? "" : Math.round(Number(product.oldPrice) * VND_PER_PRICE_UNIT)}"></label>
        <label>Stock<input name="stock" type="number" min="0" step="1" value="${Number(product.stock ?? 100)}"></label>
        <label>Sold count<input name="soldCount" type="number" min="0" step="1" value="${Number(product.soldCount || 0)}"></label>
        <div class="admin-review-readonly"><strong>Customer review rating</strong><span>${Number(API.getDisplayRating(product) || 0).toFixed(1)} / 5 · ${Number(API.getReviewCount(product) || 0)} ratings</span><small>Ratings can only be created by customer accounts. Use the Reviews action to moderate comments.</small></div>
        <label class="full">Image URL / local path<input name="imageUrl" value="${escapeHtml(product.imageUrl || "images/women_1.png")}" required></label>
        <label class="full">Badge<input name="badge" value="${escapeHtml(product.badge || "")}" placeholder="Best Seller, New, Sale…"></label>
        <label class="full">Description<textarea name="description">${escapeHtml(product.description || "")}</textarea></label>
      </div>
      <div class="form-grid three">
        <label class="checkbox-row"><input type="checkbox" name="isBestSeller" ${has("isBestSeller") ? "checked" : ""}> Best Seller</label>
        <label class="checkbox-row"><input type="checkbox" name="isNewArrival" ${has("isNewArrival") ? "checked" : ""}> New Arrival</label>
        <label class="checkbox-row"><input type="checkbox" name="isSale" ${has("isSale") ? "checked" : ""}> Sale</label>
        <label class="checkbox-row"><input type="checkbox" name="active" ${product.active === false ? "" : "checked"}> Active in catalog</label>
      </div>`;
  }

  function userFormBody(user = {}) {
    const orders = API.asArray(user.orders);
    return `
      <div class="form-grid">
        <label>Full name<input name="name" value="${escapeHtml(userDisplayName(user))}" required></label>
        <label>Email<input name="email" type="email" value="${escapeHtml(user.email)}" required></label>
        <label>Phone<input name="phone" type="tel" value="${escapeHtml(user.phone || "")}" placeholder="Customer phone"></label>
        <label>Password<input name="password" type="text" value="${escapeHtml(user.password || "")}" required></label>
        <label>Role<select name="role"><option value="customer" ${user.role !== "admin" ? "selected" : ""}>Customer</option><option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option></select></label>
        <label>Lifetime purchases (VND)<input name="totalSpentVnd" type="number" min="0" step="1000" value="${API.getUserSpend(user)}"></label>
        <label>Current-month purchases (VND)<input name="monthlySpendVnd" type="number" min="0" step="1000" value="${API.getCurrentMonthSpend(user)}"></label>
        <label class="full">Address<input name="address" value="${escapeHtml(user.address || user.defaultAddress || "")}" placeholder="Customer delivery address"></label>
        <label class="full">Orders JSON (optional)<textarea name="orders" placeholder='[{"orderId":"CRX-100001","totalVnd":2500000,"createdAt":"2026-06-01"}]'>${escapeHtml(orders.length ? JSON.stringify(orders, null, 2) : "")}</textarea></label>
      </div>`;
  }

  function readProductForm(formData, existing = {}) {
    const value = (key) => String(formData.get(key) ?? "").trim();
    const numeric = (key, fallback = 0) => {
      const parsed = Number(value(key));
      return Number.isFinite(parsed) ? parsed : fallback;
    };
    return API.productPayload({
      ...existing,
      name: value("name"),
      collection: value("collection"),
      category: value("category"),
      subCategory: value("subCategory"),
      gender: value("gender"),
      price: toCatalogPriceUnit(numeric("price")),
      oldPrice: value("oldPrice") === "" ? null : toCatalogPriceUnit(numeric("oldPrice")),
      stock: numeric("stock", 0),
      soldCount: numeric("soldCount", 0),
      rating: existing.isBestSeller ? 5 : API.getDisplayRating(existing),
      reviews: API.getReviewCount(existing),
      reviewItems: API.getReviewItems(existing),
      imageUrl: value("imageUrl"),
      galleryImages: [value("imageUrl")],
      badge: value("badge") || null,
      description: value("description"),
      isBestSeller: formData.get("isBestSeller") === "on",
      isNewArrival: formData.get("isNewArrival") === "on",
      isSale: formData.get("isSale") === "on",
      active: formData.get("active") === "on",
      legacyId: existing.legacyId ?? existing.id ?? `custom-${Date.now()}`
    });
  }

  function readUserForm(formData, existing = {}) {
    let orders = API.asArray(existing.orders);
    const rawOrders = String(formData.get("orders") || "").trim();
    if (rawOrders) {
      try {
        const parsed = JSON.parse(rawOrders);
        if (!Array.isArray(parsed)) throw new Error();
        orders = parsed;
      } catch (_) {
        throw new Error("Orders JSON must be a valid array.");
      }
    }
    return API.userPayload({
      ...existing,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim().toLowerCase(),
      password: String(formData.get("password") || ""),
      role: String(formData.get("role") || "customer"),
      totalSpentVnd: Number(formData.get("totalSpentVnd") || 0),
      monthlySpendVnd: Number(formData.get("monthlySpendVnd") || 0),
      phone: String(formData.get("phone") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      defaultAddress: String(formData.get("address") || "").trim(),
      orders
    });
  }

  function renderProducts() {
    const query = String($("#product-search")?.value || "").trim().toLowerCase();
    const products = state.products.filter(product => [product.name, product.category, product.subCategory, product.badge].join(" ").toLowerCase().includes(query));
    const tbody = $("#products-table");
    tbody.innerHTML = products.length ? products.map(product => {
      const labels = [product.isBestSeller && "Best Seller", product.isNewArrival && "New", product.isSale && "Sale", product.badge].filter(Boolean);
      return `<tr>
        <td><div class="table-product"><img src="${escapeHtml(product.imageUrl || "images/women_1.png")}" alt="" onerror="this.src='images/women_1.png'"><div><strong>${escapeHtml(product.name)}</strong><span class="table-muted">${escapeHtml(product.subCategory || product.category || "—")}</span></div></div></td>
        <td>${escapeHtml(product.collection || product.category || "—")}</td>
        <td>${formatCatalogVnd(product.price)}${product.oldPrice ? `<br><span class="table-muted">Previous: ${formatCatalogVnd(product.oldPrice)}</span>` : ""}</td>
        <td>${Number(product.stock ?? 0)}</td>
        <td>${Number(product.soldCount ?? 0)}</td>
        <td>${labels.length ? labels.map((label, index) => `<span class="label-pill ${index ? "dark" : ""}">${escapeHtml(label)}</span>`).join("") : "—"}</td>
        <td><div class="action-buttons"><button data-action="edit-product" data-id="${escapeHtml(product.id)}">Edit</button><button data-action="manage-reviews" data-id="${escapeHtml(product.id)}">Reviews (${API.getReviewItems(product).length})</button><button class="delete-btn" data-action="delete-product" data-id="${escapeHtml(product.id)}">Delete</button></div></td>
      </tr>`;
    }).join("") : `<tr><td colspan="7" class="empty-row">No products match the current search.</td></tr>`;
  }

  function membershipPill(membership) {
    const tier = membership.appliedTier;
    return `<span class="tier-pill ${tier.key}">${tier.label} · ${tier.discountPercent}%</span>`;
  }

  function renderUsers() {
    const query = String($("#user-search")?.value || "").trim().toLowerCase();
    const users = state.users.filter(user => [userDisplayName(user), user.email, user.role].join(" ").toLowerCase().includes(query));
    const tbody = $("#users-table");
    tbody.innerHTML = users.length ? users.map(user => {
      const membership = currentMembership(user);
      return `<tr>
        <td><strong class="user-name">${escapeHtml(userDisplayName(user))}</strong><span class="table-muted">${escapeHtml(user.email || "No email")}</span></td>
        <td><span class="status-pill ${user.role === "admin" ? "inactive" : "active"}">${escapeHtml(user.role || "customer")}</span></td>
        <td>${orderCount(user)}</td>
        <td>${formatVnd(membership.totalSpentVnd)}</td>
        <td>${membershipPill(membership)}<br><span class="table-muted">${escapeHtml(membership.voucherCode)}</span></td>
        <td><div class="action-buttons"><button data-action="edit-user" data-id="${escapeHtml(user.id)}">Edit</button><button class="delete-btn" data-action="delete-user" data-id="${escapeHtml(user.id)}">Delete</button></div></td>
      </tr>`;
    }).join("") : `<tr><td colspan="6" class="empty-row">No accounts match the current search.</td></tr>`;
  }

  function getAllOrders() {
    return state.users.flatMap(user => API.asArray(user.orders).map((order, index) => ({
      ...order,
      _customer: user,
      _orderIndex: index,
      _orderKey: `${user.id}::${order.orderId || index}`
    }))).sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  function orderItemSummary(order) {
    const items = API.asArray(order.items);
    if (!items.length) return "No item details";
    return items.map(item => `${item.productName || "Product"} ×${Number(item.quantity || 1)}`).join(" · ");
  }

  function orderDeliveryText(order) {
    const address = order.shippingAddress || {};
    const person = address.name || order.customerName || order._customer?.name || order._customer?.fullName || "Customer";
    const phone = address.phone || order._customer?.phone || "No phone";
    const location = [address.address || order._customer?.defaultAddress || order._customer?.address || "No address", address.district, address.city].filter(Boolean).join(", ");
    return `${person} · ${phone}<br><span class="table-muted">${escapeHtml(location)}</span>`;
  }

  function renderOrders() {
    const tbody = $("#orders-table");
    if (!tbody) return;
    const query = String($("#order-search")?.value || "").trim().toLowerCase();
    const statusFilter = String($("#order-status-filter")?.value || "all");
    const orders = getAllOrders().filter(order => {
      const haystack = [order.orderId, userDisplayName(order._customer), order._customer?.email, orderItemSummary(order)].join(" ").toLowerCase();
      return (!query || haystack.includes(query)) && (statusFilter === "all" || String(order.status || "pending") === statusFilter);
    });
    const statuses = ["pending", "confirmed", "shipping", "completed", "cancelled"];
    tbody.innerHTML = orders.length ? orders.map(order => {
      const totalVnd = Number(order.totalVnd ?? order.total ?? order.grandTotal ?? 0);
      const currentStatus = String(order.status || "pending");
      const selectId = `order-status-${escapeHtml(order._orderKey)}`;
      return `<tr>
        <td><strong class="user-name">${escapeHtml(order.orderId || "Order")}</strong><span class="table-muted">${escapeHtml(dateText(order.createdAt))}<br>${escapeHtml(userDisplayName(order._customer))}</span></td>
        <td><span class="table-muted">${escapeHtml(orderItemSummary(order))}</span></td>
        <td>${orderDeliveryText(order)}</td>
        <td>${formatVnd(totalVnd)}</td>
        <td>${escapeHtml(order.paymentMethod || "—")}</td>
        <td><select class="admin-select compact-select" data-order-status="${escapeHtml(order._orderKey)}">${statuses.map(status => `<option value="${status}" ${status === currentStatus ? "selected" : ""}>${status}</option>`).join("")}</select></td>
        <td><button data-action="save-order-status" data-user-id="${escapeHtml(order._customer.id)}" data-order-index="${order._orderIndex}" data-order-key="${escapeHtml(order._orderKey)}">Save</button></td>
      </tr>`;
    }).join("") : `<tr><td colspan="7" class="empty-row">No customer orders match the current filters.</td></tr>`;
  }

  async function updateOrderStatus(userId, orderIndex, orderKey) {
    const user = state.users.find(item => String(item.id) === String(userId));
    if (!user) throw new Error("Customer account could not be found.");
    const statusSelect = document.querySelector(`[data-order-status="${CSS.escape(orderKey)}"]`);
    const status = statusSelect?.value || "pending";
    const orders = API.asArray(user.orders);
    if (!orders[Number(orderIndex)]) throw new Error("Order could not be found.");
    orders[Number(orderIndex)] = { ...orders[Number(orderIndex)], status, updatedAt: new Date().toISOString() };
    await API.updateUser(user.id, API.userPayload({ ...user, orders }));
    await reloadData();
    showToast(`Order status updated to ${status}.`);
  }

  function renderMemberships() {
    const customers = state.users.filter(user => user.role !== "admin");
    const tbody = $("#memberships-table");
    tbody.innerHTML = customers.length ? customers.map(user => {
      const membership = currentMembership(user);
      const status = membership.maintenanceMet ? `<span class="status-pill active">Met</span>` : `<span class="status-pill inactive">Needs ${formatVnd(membership.nextMaintenanceVnd)}</span>`;
      return `<tr>
        <td><strong class="user-name">${escapeHtml(userDisplayName(user))}</strong><span class="table-muted">${escapeHtml(user.email || "")}</span></td>
        <td>${formatVnd(membership.totalSpentVnd)}</td>
        <td>${formatVnd(membership.monthlySpendVnd)}</td>
        <td><span class="tier-pill ${membership.earnedTier.key}">${membership.earnedTier.label}</span></td>
        <td>${membershipPill(membership)}<br><span class="table-muted">${escapeHtml(membership.voucherCode)}</span></td>
        <td>${status}</td>
        <td><div class="action-buttons"><button data-action="apply-user-voucher" data-id="${escapeHtml(user.id)}">Apply</button></div></td>
      </tr>`;
    }).join("") : `<tr><td colspan="7" class="empty-row">No customer accounts are available yet.</td></tr>`;
  }

  function renderOverview() {
    const customers = state.users.filter(user => user.role !== "admin");
    const customerSpend = customers.reduce((sum, user) => sum + currentMembership(user).totalSpentVnd, 0);
    const platinum = customers.filter(user => currentMembership(user).appliedTier.key === "platinum").length;
    $("#metric-products").textContent = state.products.length;
    $("#metric-users").textContent = customers.length;
    $("#metric-spend").textContent = formatVnd(customerSpend);
    $("#metric-platinum").textContent = platinum;
    $("#endpoint-products").textContent = `/${config.PRODUCT_RESOURCE || "Product"}`;
    $("#endpoint-users").textContent = `/${config.USER_RESOURCE || "users"}`;

    $("#tier-policy-list").innerHTML = API.MEMBERSHIP_TIERS.map(tier => `<div class="tier-policy-item"><span class="tier-name">${tier.label} · ${tier.discountPercent}% voucher</span><span class="tier-meta">From ${formatVnd(tier.minTotalVnd)}<br>Monthly keep: ${formatVnd(tier.monthlyMaintenanceVnd)}</span></div>`).join("");

    const recent = [...customers].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)).slice(0, 5);
    $("#recent-users-table").innerHTML = recent.length ? recent.map(user => {
      const membership = currentMembership(user);
      return `<tr><td><strong class="user-name">${escapeHtml(userDisplayName(user))}</strong><span class="table-muted">${escapeHtml(user.email || "")}</span></td><td>${escapeHtml(user.role || "customer")}</td><td>${formatVnd(membership.totalSpentVnd)}</td><td>${membershipPill(membership)}</td><td>${dateText(user.createdAt)}</td></tr>`;
    }).join("") : `<tr><td colspan="5" class="empty-row">No customers have registered yet.</td></tr>`;
  }

  function renderAll() {
    renderOverview();
    renderProducts();
    renderUsers();
    renderOrders();
    renderMemberships();
  }

  function switchTab(tab) {
    state.activeTab = tab;
    $$(".admin-nav-btn").forEach(button => button.classList.toggle("active", button.dataset.adminTab === tab));
    $$(".admin-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.panel === tab));
    const labels = { overview: "Dashboard overview", products: "Product management", users: "Account management", orders: "Order management", memberships: "Membership vouchers" };
    $("#admin-page-title").textContent = labels[tab] || "COREX dashboard";
  }

  async function reloadData() {
    setApiStatus("Loading MockAPI…");
    const [products, users] = await Promise.all([API.listProducts(), API.listUsers()]);
    state.products = (Array.isArray(products) ? products : []).map(normalizeProduct);
    state.users = Array.isArray(users) ? users : [];
    setApiStatus("MockAPI connected", "ok");
    renderAll();
  }

  async function seedCatalog() {
    const seed = Array.isArray(window.COREX_CATALOG_SEED) ? window.COREX_CATALOG_SEED : [];
    if (!seed.length) throw new Error("Local catalog seed is unavailable.");
    const result = await API.seedCatalogIfEmpty(seed);
    await reloadData();
    showToast(result.seeded ? `Seeded ${result.seeded} products into MockAPI.` : "MockAPI Product already contains records; nothing was overwritten.");
  }

  async function syncMissingCatalog() {
    const seed = Array.isArray(window.COREX_CATALOG_SEED) ? window.COREX_CATALOG_SEED : [];
    const existing = state.products;
    const keys = new Set(existing.flatMap(product => [String(product.legacyId || ""), String(product.name || "").toLowerCase()]));
    const missing = seed.filter(product => !keys.has(String(product.id)) && !keys.has(String(product.name).toLowerCase()));
    for (const product of missing) await API.createProduct(API.productPayload(product));
    await reloadData();
    showToast(missing.length ? `Pushed ${missing.length} missing products to MockAPI.` : "Every local product is already present in MockAPI.");
  }

  function openProductEditor(product) {
    openModal({
      title: product ? "Edit product" : "Add product",
      kicker: product ? "PRODUCT CRUD" : "NEW PRODUCT",
      body: productFormBody(product),
      submitLabel: product ? "Update product" : "Create product",
      onSubmit: async (formData) => {
        const payload = readProductForm(formData, product || {});
        if (product) await API.updateProduct(product.id, payload);
        else await API.createProduct(payload);
        await reloadData();
        showToast(product ? "Product updated in MockAPI." : "Product created in MockAPI.");
      }
    });
  }

  function openUserEditor(user) {
    openModal({
      title: user ? "Edit account" : "Add account",
      kicker: user ? "ACCOUNT CRUD" : "NEW ACCOUNT",
      body: userFormBody(user),
      submitLabel: user ? "Update account" : "Create account",
      onSubmit: async (formData) => {
        const payload = readUserForm(formData, user || {});
        if (user) await API.updateUser(user.id, payload);
        else await API.createUser(payload);
        await reloadData();
        showToast(user ? "Account updated in MockAPI." : "Account created in MockAPI.");
      }
    });
  }

  async function applyVoucher(userId) {
    const user = state.users.find(item => String(item.id) === String(userId));
    if (!user) return;
    const payload = API.userPayload(user);
    await API.updateUser(user.id, payload);
    await reloadData();
    showToast(`${userDisplayName(user)} now has ${payload.voucherPercent}% ${payload.membershipTier} voucher applied.`);
  }

  async function applyVouchersToAll() {
    const customers = state.users.filter(user => user.role !== "admin");
    for (const user of customers) await API.updateUser(user.id, API.userPayload(user));
    await reloadData();
    showToast(`Refreshed membership vouchers for ${customers.length} customer account(s).`);
  }


  function reviewStarsText(rating) {
    const count = Math.max(0, Math.min(5, Math.round(Number(rating || 0))));
    return `${"★".repeat(count)}${"☆".repeat(5 - count)}`;
  }

  function openReviewManager(product) {
    if (!product) return;
    const reviews = API.getReviewItems(product).sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    const body = `
      <div class="admin-review-manager">
        <div class="admin-review-summary"><strong>${escapeHtml(product.name)}</strong><span>${Number(API.getDisplayRating(product) || 0).toFixed(1)} / 5 · ${API.getReviewCount(product)} ratings</span></div>
        <p class="admin-review-note">Administrators cannot post ratings or comments. You can remove comments that violate brand or community standards.</p>
        <div class="admin-review-list">${reviews.length ? reviews.map(review => `
          <article class="admin-review-card">
            <div><strong>${escapeHtml(review.name || "COREX Customer")}</strong>${review.verifiedPurchase ? '<span class="verified-review-badge">Verified purchase</span>' : ""}<span class="admin-review-stars">${reviewStarsText(review.rating)}</span></div>
            <small>${escapeHtml(dateText(review.createdAt))}</small>
            <p>${escapeHtml(review.content)}</p>
            <button type="button" class="delete-btn admin-delete-review" data-review-id="${escapeHtml(review.id)}" data-product-id="${escapeHtml(product.id)}">Delete comment</button>
          </article>`).join("") : '<div class="empty-row">No customer reviews for this product.</div>'}</div>
      </div>`;
    openModal({
      title: "Moderate customer reviews",
      kicker: "PRODUCT REVIEW CONTROL",
      body,
      submitLabel: "Close",
      onSubmit: async () => {}
    });
    $$(".admin-delete-review").forEach(button => button.addEventListener("click", async () => {
      const current = state.products.find(item => String(item.id) === String(button.dataset.productId));
      if (!current) return;
      const review = API.getReviewItems(current).find(item => String(item.id) === String(button.dataset.reviewId));
      if (!review || !window.confirm(`Delete this comment from ${review.name || "the customer"}?`)) return;
      const reviewItems = API.getReviewItems(current).filter(item => String(item.id) !== String(button.dataset.reviewId));
      const rating = current.isBestSeller ? 5 : API.calculateReviewAverage(reviewItems, current.rating);
      const payload = API.productPayload({
        ...current,
        reviewItems,
        reviewsData: reviewItems,
        rating,
        reviews: Math.max(0, Math.max(Number(current.reviews || 0), API.getReviewItems(current).length) - 1),
        badge: current.isBestSeller ? "Best Seller" : current.badge
      });
      await API.updateProduct(current.id, payload);
      await reloadData();
      showToast("Customer review deleted from MockAPI.");
      const refreshed = state.products.find(item => String(item.id) === String(current.id));
      if (refreshed) openReviewManager(refreshed);
    }));
  }

  async function handleTableAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === "edit-product") return openProductEditor(state.products.find(product => String(product.id) === String(id)));
    if (action === "manage-reviews") return openReviewManager(state.products.find(product => String(product.id) === String(id)));
    if (action === "edit-user") return openUserEditor(state.users.find(user => String(user.id) === String(id)));
    if (action === "apply-user-voucher") return applyVoucher(id);
    if (action === "save-order-status") return updateOrderStatus(button.dataset.userId, button.dataset.orderIndex, button.dataset.orderKey);
    if (action === "delete-product") {
      const product = state.products.find(item => String(item.id) === String(id));
      if (!product || !window.confirm(`Delete “${product.name}” from MockAPI?`)) return;
      await API.deleteProduct(product.id); await reloadData(); showToast("Product deleted from MockAPI.");
    }
    if (action === "delete-user") {
      const user = state.users.find(item => String(item.id) === String(id));
      if (!user || user.role === "admin") { showToast("Admin account cannot be deleted from this dashboard.", "error"); return; }
      if (!window.confirm(`Delete ${userDisplayName(user)} from MockAPI?`)) return;
      await API.deleteUser(user.id); await reloadData(); showToast("Account deleted from MockAPI.");
    }
  }

  async function bootstrapMockApi() {
    // Persist the fixed administrator and populate an empty Product resource automatically.
    // This makes a newly created MockAPI project usable immediately after the first admin sign-in.
    await API.ensureAdminAccount();
    await reloadData();
    await API.ensureBestSellerReviewIntegrity(state.products);
    await reloadData();

    const seed = Array.isArray(window.COREX_CATALOG_SEED) ? window.COREX_CATALOG_SEED : [];
    if (state.products.length === 0 && seed.length) {
      setApiStatus("Seeding Product records…");
      const result = await API.seedCatalogIfEmpty(seed);
      await reloadData();
      if (result.seeded) showToast(`MockAPI initialized: ${result.seeded} product records and the admin account were created.`);
    }
  }

  async function enterDashboard() {
    try {
      setApiStatus("Connecting to MockAPI…");
      await bootstrapMockApi();
      $("#admin-login-screen").hidden = true;
      $("#admin-dashboard").hidden = false;
      return true;
    } catch (error) {
      console.error(error);
      // Keep the administrator inside the dashboard shell when they came from the signed-in storefront.
      // CRUD controls expose the connection error instead of bouncing them back to a second login screen.
      $("#admin-login-screen").hidden = true;
      $("#admin-dashboard").hidden = false;
      setApiStatus("MockAPI unavailable", "error");
      const message = error?.message || "Unknown MockAPI connection error.";
      $("#admin-login-error").textContent = `Could not connect to MockAPI. ${message}`;
      showToast("Dashboard opened, but MockAPI could not be reached.", "error");
      return false;
    }
  }

  function bindEvents() {
    $("#back-to-dashboard-btn")?.addEventListener("click", () => switchTab("overview"));
    $("#admin-login-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = $("#admin-email").value.trim().toLowerCase();
      const password = $("#admin-password").value;
      const errorElement = $("#admin-login-error");
      errorElement.textContent = "";
      if (!API.isFixedAdminCredentials(email, password)) {
        errorElement.textContent = "Incorrect administrator email or password.";
        return;
      }
      const submitButton = event.currentTarget.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = "Connecting to MockAPI…";
      const entered = await enterDashboard();
      if (entered) {
        sessionStorage.setItem("corex_admin_session", "true");
        localStorage.setItem("corex_admin_session", "true");
        localStorage.setItem("corex_user", JSON.stringify({ name: "COREX Administrator", email, role: "admin" }));
      }
      submitButton.disabled = false;
      submitButton.textContent = "Sign in to dashboard";
    });

    $$(".admin-nav-btn").forEach(button => button.addEventListener("click", () => switchTab(button.dataset.adminTab)));
    $$('[data-jump-tab="users"]').forEach(button => button.addEventListener("click", () => switchTab("users")));
    $("#refresh-data-btn").addEventListener("click", () => reloadData().catch(error => { setApiStatus("MockAPI unavailable", "error"); showToast(error.message, "error"); }));
    $("#seed-catalog-btn").addEventListener("click", () => seedCatalog().catch(error => showToast(error.message, "error")));
    $("#sync-products-btn").addEventListener("click", () => syncMissingCatalog().catch(error => showToast(error.message, "error")));
    $("#new-product-btn").addEventListener("click", () => openProductEditor());
    $("#new-user-btn").addEventListener("click", () => openUserEditor());
    $("#apply-vouchers-btn").addEventListener("click", () => applyVouchersToAll().catch(error => showToast(error.message, "error")));
    $("#product-search").addEventListener("input", renderProducts);
    $("#user-search").addEventListener("input", renderUsers);
    $("#products-table").addEventListener("click", event => handleTableAction(event).catch(error => showToast(error.message, "error")));
    $("#users-table").addEventListener("click", event => handleTableAction(event).catch(error => showToast(error.message, "error")));
    $("#orders-table").addEventListener("click", event => handleTableAction(event).catch(error => showToast(error.message, "error")));
    $("#memberships-table").addEventListener("click", event => handleTableAction(event).catch(error => showToast(error.message, "error")));
    $("#order-search").addEventListener("input", renderOrders);
    $("#order-status-filter").addEventListener("change", renderOrders);
    $("#close-modal-btn").addEventListener("click", closeModal);
    $("#admin-modal").addEventListener("click", event => { if (event.target.id === "admin-modal") closeModal(); });
    $("#admin-logout-btn").addEventListener("click", () => {
      sessionStorage.removeItem("corex_admin_session");
      localStorage.removeItem("corex_admin_session");
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ source: "corex-admin", type: "logout" }, window.location.origin);
        return;
      }
      window.location.href = "index.html#home";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!API) {
      $("#admin-login-error").textContent = "MockAPI client is missing. Check js/venv.js and js/mockapi-client.js.";
      return;
    }
    bindEvents();
    // Direct navigation from the main storefront bypasses the separate login screen only
    // when the same browser has explicitly signed in as the fixed administrator.
    if (hasExplicitAdminSession()) {
      enterDashboard();
    }
  });
})();
