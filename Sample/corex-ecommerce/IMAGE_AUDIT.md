# COREX Visual Product Image Audit

## Scope completed

This audit refactors the local static catalog so the Homepage **Best Sellers** modules reuse the exact same product objects shown in the main menu collections. No duplicate or artificially cloned Best Seller products are rendered.

## Best Seller source of truth

Each product now uses:

```js
isBestSeller: true,
badge: "Best Seller"
```

The Homepage reads `isBestSeller` and displays exactly four products for each primary collection:

| Collection | Product IDs | Products |
|---|---:|---|
| Women | 1, 2, 3, 4 | Essential Sports Bra, Flow Leggings, Training Tank, Seamless Leggings |
| Men | 11, 12, 13, 15 | Performance Tee, Training Tank, Muscle Tank, Gym Shorts |
| Yoga | 21, 22, 23, 24 | Yoga Tank Top, Seamless Leggings, Yoga Set, Longline Bra |
| Accessories | 31, 32, 33, 36 | Yoga Mat, Gym Backpack, Water Bottle, Foam Roller |

The exact same product record, image, price, and `BEST SELLER` badge are used in:
- Homepage Best Sellers
- Women / Men / Yoga / Accessories menu pages
- Product detail view
- Best Sellers “View All” listing

The Homepage Best Sellers component now has only the four relevant collection tabs. New Arrivals and Sale remain their own dedicated menu collections rather than being mislabeled as Best Sellers.

## Image fixes

### Removed remote product-image dependencies

All `PRODUCTS[].imageUrl` and `galleryImages` entries now point to the local `images/` folder. This removes image loading instability from external Unsplash URLs and makes the project reliable when deployed to GitHub Pages.

Repaired product-image mappings include:

| Product range | Local image source |
|---|---|
| Accessories 33–40 | `images/accessories_3.png` through `images/accessories_10.png` |
| New Arrivals 41–50 | `images/new-arrivals_1.png` through `images/new-arrivals_10.png` |
| Sale product 60 | `images/sale_10.png` |

### Source verification results

- Product entries checked: **60**
- Broken local product-image references: **0**
- External product-image URLs remaining in `app.js`: **0**
- Image files verified with Pillow: **68**
- Corrupt image files found: **0**
- JavaScript syntax check: **passed** with `node -c js/app.js`

## Additional fixes

- Removed the previous detail-page behavior that transformed normal product IDs into Sale items. A Best Seller now keeps its true price and badge when the detail page opens.
- Menu collections now use deterministic product ranges, so Women, Men, Yoga, Accessories, New Arrivals, and Sale render their intended catalog data.
- Added `best-seller` listing mode for the Homepage **View All** link.
- Updated detail-page breadcrumbs to route back to the actual source collection.
- Improved local SVG fallback shapes for yoga block, foam roller, resistance band, socks, and towel.

## Image convention

Every product is expected to use a local URL such as:

```text
images/women_1.png
images/men_4.png
images/yoga_8.png
images/accessories_6.png
images/new-arrivals_3.png
images/sale_10.png
```

This keeps product cards, product details, and GitHub Pages deployment independent from third-party image hosts.
