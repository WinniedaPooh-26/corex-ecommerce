/* COREX MockAPI client: shared by storefront and admin dashboard. */
(function () {
  "use strict";

  const config = window.COREX_VENV || {};
  const baseUrl = String(config.MOCKAPI_BASE_URL || "").replace(/\/$/, "");

  const MEMBERSHIP_TIERS = Object.freeze([
    { key: "bronze", label: "Bronze", minTotalVnd: 0, discountPercent: 0, monthlyMaintenanceVnd: 0 },
    { key: "silver", label: "Silver", minTotalVnd: 1000000000, discountPercent: 5, monthlyMaintenanceVnd: 200000000 },
    { key: "gold", label: "Gold", minTotalVnd: 2000000000, discountPercent: 10, monthlyMaintenanceVnd: 400000000 },
    { key: "platinum", label: "Platinum", minTotalVnd: 3000000000, discountPercent: 15, monthlyMaintenanceVnd: 600000000 }
  ]);

  function asArray(value, fallback = []) {
    if (Array.isArray(value)) return value;
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : fallback;
      } catch (_) {
        return fallback;
      }
    }
    return fallback;
  }

  function asNumber(value, fallback = 0) {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
  }

  function asBoolean(value, fallback = false) {
    if (typeof value === "boolean") return value;
    if (typeof value === "string") return value.toLowerCase() === "true";
    if (typeof value === "number") return value === 1;
    return fallback;
  }

  function isFixedAdminCredentials(email, password) {
    return String(email || "").trim().toLowerCase() === String(config.ADMIN_EMAIL || "admin@corex.com").toLowerCase()
      && String(password || "") === String(config.ADMIN_PASSWORD || "01");
  }

  function endpoint(resource, id) {
    if (!baseUrl) throw new Error("MockAPI base URL is missing. Check js/venv.js.");
    const cleanResource = encodeURIComponent(resource);
    return `${baseUrl}/${cleanResource}${id !== undefined && id !== null ? `/${encodeURIComponent(id)}` : ""}`;
  }

  async function request(resource, options = {}, id) {
    // Do not send Content-Type on GET/DELETE requests. Setting application/json there
    // triggers an unnecessary CORS preflight in some browsers and can block MockAPI.
    const hasBody = options.body !== undefined && options.body !== null;
    const headers = { ...(options.headers || {}) };
    if (hasBody && !headers["Content-Type"]) headers["Content-Type"] = "application/json";

    let response;
    try {
      response = await fetch(endpoint(resource, id), {
        ...options,
        headers,
        cache: "no-store"
      });
    } catch (networkError) {
      throw new Error(`Cannot reach MockAPI at ${endpoint(resource, id)}. ${networkError.message || "Check your internet connection and the configured endpoint."}`);
    }

    const contentType = response.headers.get("content-type") || "";
    const body = contentType.includes("application/json") ? await response.json() : await response.text();

    if (!response.ok) {
      const error = new Error(typeof body === "string" ? body : (body?.message || `MockAPI request failed (${response.status})`));
      error.status = response.status;
      error.body = body;
      throw error;
    }

    return body;
  }

  const api = {
    config,
    MEMBERSHIP_TIERS,
    asArray,
    asNumber,
    asBoolean,
    isFixedAdminCredentials,

    listProducts() {
      return request(config.PRODUCT_RESOURCE || "Product");
    },
    getProduct(id) {
      return request(config.PRODUCT_RESOURCE || "Product", {}, id);
    },
    createProduct(payload) {
      return request(config.PRODUCT_RESOURCE || "Product", { method: "POST", body: JSON.stringify(payload) });
    },
    updateProduct(id, payload) {
      return request(config.PRODUCT_RESOURCE || "Product", { method: "PUT", body: JSON.stringify(payload) }, id);
    },
    deleteProduct(id) {
      return request(config.PRODUCT_RESOURCE || "Product", { method: "DELETE" }, id);
    },

    listUsers() {
      return request(config.USER_RESOURCE || "users");
    },
    getUser(id) {
      return request(config.USER_RESOURCE || "users", {}, id);
    },
    createUser(payload) {
      return request(config.USER_RESOURCE || "users", { method: "POST", body: JSON.stringify(payload) });
    },
    updateUser(id, payload) {
      return request(config.USER_RESOURCE || "users", { method: "PUT", body: JSON.stringify(payload) }, id);
    },
    deleteUser(id) {
      return request(config.USER_RESOURCE || "users", { method: "DELETE" }, id);
    },

    productPayload(product) {
      const now = new Date().toISOString();
      return {
        ...product,
        legacyId: product.legacyId || product.id,
        corexManaged: true,
        colors: Array.isArray(product.colors) ? product.colors : asArray(product.colors),
        sizes: Array.isArray(product.sizes) ? product.sizes : asArray(product.sizes),
        galleryImages: Array.isArray(product.galleryImages) ? product.galleryImages : asArray(product.galleryImages),
        price: asNumber(product.price),
        oldPrice: product.oldPrice === null || product.oldPrice === undefined || product.oldPrice === "" ? null : asNumber(product.oldPrice),
        stock: asNumber(product.stock, 100),
        soldCount: asNumber(product.soldCount),
        isBestSeller: asBoolean(product.isBestSeller),
        isNewArrival: asBoolean(product.isNewArrival),
        isSale: asBoolean(product.isSale),
        updatedAt: now,
        createdAt: product.createdAt || now
      };
    },

    normalizeProduct(record) {
      const legacyId = record.legacyId ?? record.id;
      return {
        ...record,
        id: Number.isFinite(Number(legacyId)) ? Number(legacyId) : legacyId,
        mockId: record.id,
        price: asNumber(record.price),
        oldPrice: record.oldPrice === null || record.oldPrice === undefined || record.oldPrice === "" ? null : asNumber(record.oldPrice),
        colors: asArray(record.colors),
        sizes: asArray(record.sizes),
        galleryImages: asArray(record.galleryImages, record.imageUrl ? [record.imageUrl] : []),
        rating: asNumber(record.rating),
        reviews: asNumber(record.reviews),
        stock: asNumber(record.stock, 100),
        soldCount: asNumber(record.soldCount),
        isBestSeller: asBoolean(record.isBestSeller),
        isNewArrival: asBoolean(record.isNewArrival),
        isSale: asBoolean(record.isSale)
      };
    },

    getUserSpend(user) {
      const orders = asArray(user.orders);
      const orderTotal = orders.reduce((sum, order) => sum + asNumber(order.totalVnd ?? order.total ?? order.grandTotal), 0);
      return Math.max(asNumber(user.totalSpentVnd), orderTotal);
    },

    getCurrentMonthSpend(user) {
      if (user.monthlySpendVnd !== undefined && user.monthlySpendVnd !== null && user.monthlySpendVnd !== "") {
        return asNumber(user.monthlySpendVnd);
      }
      const currentMonth = new Date().toISOString().slice(0, 7);
      return asArray(user.orders).reduce((sum, order) => {
        const created = String(order.createdAt || order.created_at || "").slice(0, 7);
        return created === currentMonth ? sum + asNumber(order.totalVnd ?? order.total ?? order.grandTotal) : sum;
      }, 0);
    },

    getMembership(user) {
      const totalSpentVnd = api.getUserSpend(user);
      const monthlySpendVnd = api.getCurrentMonthSpend(user);
      let tierIndex = MEMBERSHIP_TIERS.findIndex((tier, index) => {
        const next = MEMBERSHIP_TIERS[index + 1];
        return totalSpentVnd >= tier.minTotalVnd && (!next || totalSpentVnd < next.minTotalVnd);
      });
      if (tierIndex < 0) tierIndex = 0;

      const earnedTier = MEMBERSHIP_TIERS[tierIndex];
      let appliedIndex = tierIndex;
      while (appliedIndex > 0 && monthlySpendVnd < MEMBERSHIP_TIERS[appliedIndex].monthlyMaintenanceVnd) {
        appliedIndex -= 1;
      }
      const appliedTier = MEMBERSHIP_TIERS[appliedIndex];
      const maintenanceMet = appliedIndex === tierIndex;

      return {
        totalSpentVnd,
        monthlySpendVnd,
        earnedTier,
        appliedTier,
        maintenanceMet,
        voucherCode: `COREX-${appliedTier.label.toUpperCase()}-${appliedTier.discountPercent}`,
        discountPercent: appliedTier.discountPercent,
        nextMaintenanceVnd: earnedTier.monthlyMaintenanceVnd
      };
    },

    userPayload(user) {
      const now = new Date().toISOString();
      const membership = api.getMembership(user);
      return {
        ...user,
        name: user.name || user.fullName || "Unnamed customer",
        email: String(user.email || "").trim().toLowerCase(),
        role: user.role === "admin" ? "admin" : "customer",
        fullName: user.fullName || user.name || "Unnamed customer",
        phone: String(user.phone || "").trim(),
        address: String(user.address || user.defaultAddress || "").trim(),
        defaultAddress: String(user.defaultAddress || user.address || "").trim(),
        city: String(user.city || "").trim(),
        district: String(user.district || "").trim(),
        orders: asArray(user.orders),
        totalSpentVnd: membership.totalSpentVnd,
        monthlySpendVnd: membership.monthlySpendVnd,
        membershipTier: membership.appliedTier.key,
        earnedMembershipTier: membership.earnedTier.key,
        voucherPercent: membership.discountPercent,
        voucherCode: membership.voucherCode,
        membershipStatus: membership.maintenanceMet ? "active" : "maintenance_required",
        updatedAt: now,
        createdAt: user.createdAt || now
      };
    },

    async ensureAdminAccount() {
      const users = await api.listUsers();
      const expectedEmail = String(config.ADMIN_EMAIL || "admin@corex.com").toLowerCase();
      const existing = users.find(user => String(user.email || "").toLowerCase() === expectedEmail);
      const adminPayload = api.userPayload({
        ...(existing || {}),
        name: "COREX Administrator",
        email: expectedEmail,
        password: String(config.ADMIN_PASSWORD || "01"),
        role: "admin",
        totalSpentVnd: 0,
        monthlySpendVnd: 0,
        orders: existing?.orders || []
      });
      if (existing) return api.updateUser(existing.id, adminPayload);
      return api.createUser(adminPayload);
    },

    async seedCatalogIfEmpty(localProducts) {
      const remote = await api.listProducts();
      if (Array.isArray(remote) && remote.length > 0) return { seeded: 0, products: remote };
      const catalog = Array.isArray(localProducts) ? localProducts : [];
      const created = [];
      for (const product of catalog) {
        created.push(await api.createProduct(api.productPayload(product)));
      }
      return { seeded: created.length, products: created };
    },

    async updateInventoryForOrder(items = []) {
      if (!Array.isArray(items) || items.length === 0) return [];
      const products = await api.listProducts();
      const updates = [];
      for (const item of items) {
        const remoteProduct = (products || []).find(product => String(product.legacyId ?? product.id) === String(item.productId));
        if (!remoteProduct) continue;
        const quantity = Math.max(0, asNumber(item.quantity, 0));
        const updatedProduct = api.productPayload({
          ...remoteProduct,
          stock: Math.max(0, asNumber(remoteProduct.stock, 0) - quantity),
          soldCount: asNumber(remoteProduct.soldCount, 0) + quantity
        });
        updates.push(api.updateProduct(remoteProduct.id, updatedProduct));
      }
      return Promise.allSettled(updates);
    },

    async recordCustomerOrder(user, order, profile = {}) {
      if (!user?.id) return null;
      const remoteUser = await api.getUser(user.id);
      const orders = asArray(remoteUser.orders);
      orders.push(order);
      const updated = api.userPayload({
        ...remoteUser,
        ...profile,
        name: profile.name || remoteUser.name || remoteUser.fullName,
        fullName: profile.name || remoteUser.fullName || remoteUser.name,
        phone: profile.phone || remoteUser.phone,
        address: profile.address || remoteUser.address || remoteUser.defaultAddress,
        defaultAddress: profile.defaultAddress || remoteUser.defaultAddress || remoteUser.address,
        city: profile.city || remoteUser.city,
        district: profile.district || remoteUser.district,
        orders,
        totalSpentVnd: api.getUserSpend(remoteUser) + asNumber(order.totalVnd ?? order.total),
        monthlySpendVnd: api.getCurrentMonthSpend(remoteUser) + asNumber(order.totalVnd ?? order.total)
      });
      const savedUser = await api.updateUser(remoteUser.id, updated);
      api.updateInventoryForOrder(order.items).catch(error => console.warn("COREX: inventory update failed after order sync.", error));
      return savedUser;
    }
  };

  window.CorexMockApi = api;
})();
