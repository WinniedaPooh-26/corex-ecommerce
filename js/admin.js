/* COREX Admin Dashboard — MockAPI CRUD and membership management. */
(function () {
  "use strict";

  const API = window.CorexMockApi;
  const config = window.COREX_VENV || {};
  const state = { products: [], users: [], activeTab: "overview", currentModal: null };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const formatVnd = (value) => `${Number(value || 0).toLocaleString("vi-VN")} ₫`;
  const formatUsd = (value) => `$${Number(value || 0).toFixed(2)}`;
  const dateText = (value) => value ? new Date(value).toLocaleDateString("vi-VN") : "—";
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[ch]));

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
        <label>Price (USD)<input name="price" type="number" min="0" step="0.01" value="${Number(product.price || 0)}" required></label>
        <label>Old price (USD)<input name="oldPrice" type="number" min="0" step="0.01" value="${product.oldPrice ?? ""}"></label>
        <label>Stock<input name="stock" type="number" min="0" step="1" value="${Number(product.stock ?? 100)}"></label>
        <label>Sold count<input name="soldCount" type="number" min="0" step="1" value="${Number(product.soldCount || 0)}"></label>
        <label>Rating<input name="rating" type="number" min="0" max="5" step="0.1" value="${Number(product.rating || 0)}"></label>
        <label>Reviews<input name="reviews" type="number" min="0" step="1" value="${Number(product.reviews || 0)}"></label>
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
      price: numeric("price"),
      oldPrice: value("oldPrice") === "" ? null : numeric("oldPrice"),
      stock: numeric("stock", 0),
      soldCount: numeric("soldCount", 0),
      rating: numeric("rating", 0),
      reviews: numeric("reviews", 0),
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
      address: String(formData.get("address") || "").trim(),
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
        <td>${formatUsd(product.price)}${product.oldPrice ? `<br><span class="table-muted">was ${formatUsd(product.oldPrice)}</span>` : ""}</td>
        <td>${Number(product.stock ?? 0)}</td>
        <td>${Number(product.soldCount ?? 0)}</td>
        <td>${labels.length ? labels.map((label, index) => `<span class="label-pill ${index ? "dark" : ""}">${escapeHtml(label)}</span>`).join("") : "—"}</td>
        <td><div class="action-buttons"><button data-action="edit-product" data-id="${escapeHtml(product.id)}">Edit</button><button class="delete-btn" data-action="delete-product" data-id="${escapeHtml(product.id)}">Delete</button></div></td>
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
    renderMemberships();
  }

  function switchTab(tab) {
    state.activeTab = tab;
    $$(".admin-nav-btn").forEach(button => button.classList.toggle("active", button.dataset.adminTab === tab));
    $$(".admin-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.panel === tab));
    const labels = { overview: "Dashboard overview", products: "Product management", users: "Account management", memberships: "Membership vouchers" };
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

  async function handleTableAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === "edit-product") return openProductEditor(state.products.find(product => String(product.id) === String(id)));
    if (action === "edit-user") return openUserEditor(state.users.find(user => String(user.id) === String(id)));
    if (action === "apply-user-voucher") return applyVoucher(id);
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
      sessionStorage.removeItem("corex_admin_session");
      setApiStatus("MockAPI unavailable", "error");
      const message = error?.message || "Unknown MockAPI connection error.";
      $("#admin-login-error").textContent = `Could not connect to MockAPI. ${message}`;
      showToast("Admin sign-in was not completed because MockAPI could not be reached.", "error");
      return false;
    }
  }

  function bindEvents() {
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
      if (entered) sessionStorage.setItem("corex_admin_session", "true");
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
    $("#memberships-table").addEventListener("click", event => handleTableAction(event).catch(error => showToast(error.message, "error")));
    $("#close-modal-btn").addEventListener("click", closeModal);
    $("#admin-modal").addEventListener("click", event => { if (event.target.id === "admin-modal") closeModal(); });
    $("#admin-logout-btn").addEventListener("click", () => {
      sessionStorage.removeItem("corex_admin_session");
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
    if (sessionStorage.getItem("corex_admin_session") === "true") {
      enterDashboard();
    }
  });
})();
