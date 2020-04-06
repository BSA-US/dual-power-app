# Dual Power App API

## REST endpoints

- `GET /api/meta`: Lists available endpoints
- `GET /api/terms`: Lists all terms

## Using GraphQL directly

Instead of going through the API, you can hit [Fauna](http://fauna.com)'s GraphQL endpoint directly at `https://graphql.fauna.com/graphql`.

- You can [learn about using GraphQL over HTTP here](https://graphql.org/learn/serving-over-http/)
- Check out `~/db/queries/` for available queries
- A shared public secret is available in `~/.env.template`
