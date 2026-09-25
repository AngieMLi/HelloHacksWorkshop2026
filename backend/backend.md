Start the API from this folder:

```sh
npm run dev
```

The server listens on port `3000` by default (or `PORT` if set). Look up a
Pokémon type by ID or name with `GET /api/type/:idOrName`, for example
`http://localhost:3000/api/type/fire`. The endpoint returns only the names in
`half_damage_to` and `double_damage_from`:

```json
{
  "half_damage_to": ["fire", "water"],
  "double_damage_from": ["ground", "rock"]
}
```

If PokéAPI cannot be reached, the endpoint returns a `502` error.

Use `npm start` to run without automatic restarts.
