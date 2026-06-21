# MockAPI login and automatic bootstrap fix

Admin credentials are fixed for this prototype:

- Email: `admin@corex.com`
- Password: `01`

## What happens at first admin sign-in

1. The code connects to `https://6a3810f7c105017aa6399dc8.mockapi.io`.
2. It creates or updates the admin record in the `users` resource.
3. When `Product` is empty, it automatically seeds the local COREX catalog into `Product`.
4. The dashboard opens only after the MockAPI connection succeeds.

The MockAPI client no longer sends `Content-Type: application/json` for GET/DELETE requests. That avoids unnecessary browser CORS preflight requests which could prevent reads from MockAPI.

## Required resource names

- `Product` (capital P)
- `users` (lowercase u)

Both resources must exist in the MockAPI project.
