# COREX Admin Primary Route

The administrator control center is now opened from the primary storefront URL:

`index.html#admin`

Flow:
1. Open the normal COREX storefront.
2. Click the account icon.
3. Sign in with `admin@corex.com` and password `01`.
4. The storefront stays on the main app and routes to `#admin`.

The existing `admin.html` dashboard is retained as the CRUD implementation and is embedded only while the `#admin` route is active. It shares the same session and MockAPI configuration. Signing out returns to `#home`.
