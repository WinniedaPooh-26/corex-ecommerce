# COREX Auth, Admin, and Checkout Flow Fix

## Current session behavior
- A device opens as a **guest** until a person logs in or registers.
- The browser restores the account last signed in on that device from `localStorage`.
- Legacy auto-created administrator sessions are discarded unless `corex_admin_session` was created after a real admin sign-in.
- Carts and wishlists are saved per signed-in account rather than shared with guests or other accounts.

## Admin flow
- Use `admin@corex.com` and `01` from the main account modal.
- A successful administrator login goes directly to `#admin`; the embedded dashboard skips its independent login screen.
- The storefront header shows **Back to Dashboard** while that administrator account remains signed in.
- Signing out from the dashboard clears the storefront session and returns to `#home`.

## Registration and checkout
Registration requires Full Name, Email, Phone, Address, Password and Re-enter Password.
Password rules: 8+ characters, uppercase letter, number and special character; the confirmation must match.

Guests can browse/search only. Cart, wishlist, Buy Now and checkout ask the visitor to sign in or register.
A signed-in customer gets their saved name, email, phone and address pre-filled at checkout. They can update the delivery information and opt to save it back to their MockAPI account.

## Order integrity
- New orders are stored on the signed-in MockAPI user record.
- The order includes delivery information, items, quantities and payment selection.
- MockAPI product stock is decremented and `soldCount` is incremented after a successful customer-order synchronization.
- Shop sorting now supports Most Purchased and Least Purchased.
