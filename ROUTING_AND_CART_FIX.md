# Cart and routing fix

- Removed the code that inserted two demo products into every empty cart.
- Added a one-time cleanup for the legacy demo cart containing product IDs 1 and 2.
- Added hash-based routing (`#home`, `#shop?category=women`, `#detail?id=1`, `#cart`, etc.).
- Reload now restores the active view instead of forcing the homepage.
- Browser Back and Forward now move between in-site views through `hashchange`.
