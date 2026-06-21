# COREX Admin Dashboard + MockAPI

## Runtime configuration

The browser-readable runtime configuration is kept in:

```text
js/venv.js
```

It contains:

```js
MOCKAPI_BASE_URL: "https://6a3810f7c105017aa6399dc8.mockapi.io"
PRODUCT_RESOURCE: "Product"
USER_RESOURCE: "users"
```

`venv.js` is not a secure secret store. MockAPI is being used here as a browser-side prototype datastore, so do not place private production keys in this file.

## Admin login

```text
Email: admin@corex.com
Password: 01
```

When the dashboard is opened, the code checks the `users` resource and creates or updates this administrator account automatically.

## MockAPI resources

The project expects two existing resources:

```text
/Product
/users
```

### Product fields written by the dashboard

- `name`, `collection`, `category`, `subCategory`, `gender`
- `price`, `oldPrice`, `stock`, `soldCount`, `rating`, `reviews`
- `imageUrl`, `galleryImages`, `badge`, `description`
- `isBestSeller`, `isNewArrival`, `isSale`, `active`
- `legacyId`, `corexManaged`, `createdAt`, `updatedAt`

### User fields written by the dashboard

- `name`, `email`, `password`, `role`, `address`
- `orders` (JSON array)
- `totalSpentVnd`, `monthlySpendVnd`
- `membershipTier`, `earnedMembershipTier`
- `voucherPercent`, `voucherCode`, `membershipStatus`
- `createdAt`, `updatedAt`

## Membership policy

| Tier | Lifetime purchases | Voucher | Monthly amount required to keep voucher |
|---|---:|---:|---:|
| Bronze | under 1,000,000,000 VND | 0% | 0 VND |
| Silver | 1,000,000,000–1,999,999,999 VND | 5% | 200,000,000 VND |
| Gold | 2,000,000,000–2,999,999,999 VND | 10% | 400,000,000 VND |
| Platinum | from 3,000,000,000 VND | 15% | 600,000,000 VND |

The monthly retention amount equals 20% of the tier’s entry spending threshold. If it is not met, the dashboard applies the highest lower tier whose monthly requirement is met.

## Product data synchronization

- `Seed missing catalog` only posts the local catalog when `/Product` is empty.
- `Sync missing local products` posts only local products that do not already match a remote record by legacy ID or product name.
- Every product/user create, edit, delete and voucher refresh is performed with MockAPI REST requests.

## Important demo limitation

This is a frontend prototype. Passwords are stored as plain text because MockAPI is not a production authentication system. Do not use this model for real customers or real payment data.
