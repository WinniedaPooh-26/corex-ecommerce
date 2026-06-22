# TODO - Admin dashboard login redirect + VNĐ + “Back to dashboard” button

- [ ] Update `admin.html` to add a topbar button “Back to dashboard”.
- [ ] Update `js/admin.js` to:
  - [ ] Wire “Back to dashboard” button to switch to `overview` tab.
  - [ ] Ensure all monetary values in admin pages show VNĐ (not `$`), including product price columns/tables.
  - [ ] Convert product `price` / `oldPrice` (stored as USD) to VNĐ using `* 25000`.
- [ ] Smoke test manually:
  - [ ] Login as admin -> should open dashboard immediately (no admin login screen).
  - [ ] Click “Back to dashboard” -> switches to Overview.
  - [ ] In Products table -> price shows “₫” / VNĐ.
