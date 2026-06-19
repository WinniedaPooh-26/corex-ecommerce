# COREX - Premium Activewear E-Commerce Website

A premium e-commerce website designed for COREX, a high-end activewear brand that strikes a perfect balance between yoga softness (for women) and gym training strength (for men).

This project is built using only pure HTML, CSS, and vanilla JavaScript. It runs as a Single Page Application (SPA) using client-side routing simulated in JS, requiring no backend or complex build pipelines. It is optimized for direct hosting on **GitHub Pages**.

## Features

- **SPA Router**: Client-side view routing (Home, Shop, Detail, Cart, Checkout, Wishlist, Search, Account) without framework overhead.
- **Product Data**: Local catalog of 60 products covering women's yoga activewear, men's gym apparel, and accessories.
- **Dynamic Filters & Sorting**: Refine products by category, size, color, material, and price range; sort by rating, price, and newest.
- **Interactive Cart & Wishlist**: Add/remove items, update quantities, choose sizes/colors, and apply discount codes (`COREX10` for 10% off, `FREESHIP` for free shipping).
- **Checkout Wizard**: Step-by-step checkout process with form validation and dynamic order success summary.
- **Wishlist Manager**: Save favorite items and quickly transfer them to the shopping cart.
- **Mock Account Auth**: Log in to see personalized greetings and save user preferences to `localStorage`.
- **Search System**: Instantly search product names and descriptions.
- **Responsive Layout**: Fluid design adapts to Desktop, Tablet, and Mobile viewport sizes.

## Directory Structure

```text
corex-ecommerce/
├── index.html         # Main SPA entrypoint
├── css/
│   └── style.css      # Core design system and styles
├── js/
│   └── app.js         # State manager, product data, and routing
└── README.md          # Project documentation
```

## Running Locally

1. Clone or download this folder.
2. Open `index.html` directly in any web browser (Double-click or drag into browser).
3. Alternatively, serve it locally using a simple development server (e.g., Live Server in VS Code, `npx serve`, or Python's `python -m http.server`).

## Deployment to GitHub Pages

1. Create a new repository on GitHub.
2. Push this folder's contents directly to the `main` branch.
3. Go to **Settings** -> **Pages** in your repository.
4. Set the source to the `main` branch and root `/` folder, then save.
5. Within minutes, your site will be live at `https://<your-username>.github.io/<repository-name>/`.


## Best Seller and image model

- Homepage Best Sellers contains exactly **four** products for each primary collection: Women, Men, Yoga, and Accessories.
- Best Seller cards reuse the same catalog products rendered in their respective menu tabs, with a shared `isBestSeller: true` source of truth.
- Product images are stored locally under `images/`; product data no longer depends on remote product-image URLs.
- See `SOURCE_AUDIT.md` for the selected Best Seller products and image verification results.
