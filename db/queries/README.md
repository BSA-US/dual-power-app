## Importing

### individual queries (recommenaded)

```typescript
import { gql } from '~/db'
import { allTerms } from '~/queries/Term'

const response = await gql({ query: allTerms() })
```

### All queries of one type

```typescript
import { gql } from '~/db'
import { Term } from '~/db/queries'

const response = await gql({ query: Term.allTerms() })
```

### All queries

```typescript
import { gql, Queries } from '~/db'

const response = await gql({ query: Queries.Term.allTerms() }))
```
## To do

- [x] Add existing Terms queries
- [ ] Document which mutations Fauna creates automatically
