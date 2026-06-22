# COREX Reviews, Ratings and Moderation

## Customer experience
- The catalog adds a `Customer Rating` filter (5 stars, 4 stars & up, 3 stars & up) alongside existing category, size, color, price and material filters.
- Products marked `isBestSeller: true` are always rendered as **5.0 / 5** and carry the **Best Seller** label everywhere they appear.
- Product detail → Reviews shows seeded example reviews and lets a signed-in customer submit or update one review per product.
- A guest is prompted to sign in before reviewing. Administrator accounts cannot post ratings or comments.

## MockAPI persistence
- Reviews are stored inside the existing `Product` resource using `reviewItems` / `reviewsData`.
- Each record includes reviewer ID, name, rating, content, date and verified-purchase status.
- Existing Best Seller records receive seeded customer reviews and a fixed 5.0 rating when MockAPI integrity bootstrap runs.

## Admin moderation
- Admin → Products has a **Reviews (n)** action for every product.
- Admin can inspect and delete individual customer comments. Admin cannot add comments or ratings.
- Deletions are written straight back to the `Product` resource in MockAPI.
