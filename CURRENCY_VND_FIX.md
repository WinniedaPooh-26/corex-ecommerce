# Currency display fix — VNĐ only

- Storefront product, cart, wishlist, detail, checkout and order-success displays now use `vi-VN` formatting and the `₫` symbol.
- Static checkout labels now show the correct local values: free standard shipping over **1.875.000 ₫** and express shipping **125.000 ₫**.
- Admin product create/edit forms now accept and display **VNĐ**. Existing MockAPI catalog records remain compatible; values are converted internally when saved.
- Orders now persist `subtotalVnd`, `discountVnd`, `shippingVnd`, `totalVnd`, and per-item `priceVnd`.
