## Notes

- This directory is based on the [Fauna Labs GraphQL example](https://github.com/fauna-labs/migrations/tree/main/graphql)
- UDFs are written as shell commands but should be uploaded by pasting into the dashboard
- When updating the schema with a new `@resolver`, create the UDF before uploading the schema

## Assumptions

- **~10 minutes of downtime is ok:** By going down for changes to existing types in the GraphQL schema, the schema and UDFs can always be manually migrated in the dashboard.
- **Runtime document migration is ok:** By changing documents at runtime, data migration can be written as a conditional step a UDF rather than scripted.

## Types of changes

### Simple additions

1. Create/update UDFs
2. Create/update GraphQL schema (via replace)

### Migrations

1. Create/update migration UDFs
2. _(begin downtime)_
3. Create/update UDFs
4. Update (via replace) GraphQL schema
5. _(end downtime)_

## How to get to this state

1. **Initialize the database:**
    1. Upload `schemas/initial-schema.graphql`
    2. Run `populate-firewall-rules.graphql`
2. **Migrate `findFirewallRuleByID` to a UDF:**
    1. Upload `udfs/basic/find_firewall_rule_by_id.fql`
    2. Upload (via replace) `schemas/v2-schema.graphql`
3. **Migrate `updateFirewallRule` to a UDF:**
    1. Upload (via replace) `schemas/v3-schema.graphql`
    2. Upload `udfs/basic/update_firewall_rule.fql`
    3. Upload (via replace) `schemas/v4-schema.graphql`
4. **Migrate `deleteFirewallRule` to a UDF:**
    1. Upload `udfs/basic/delete_firewall_rule.fql`
    2. Upload (via replace) `schemas/v5-schema.graphql`
5. **Migrate `createFirewallRule` to a UDF:**
    1. Upload `udfs/basic/create_firewall_frule.fql`
    2. Upload (via replace) `schemas/v6-schema.graphql`
6. **Migrate `FirewallRule.ipRange` to an `Array`:**
    1. Upload `udfs/migrate_firewall_rule.fql`
    2. _(begin downtime)_
    3. Upload `udfs/migrated/*`
    4. Upload (via replace) `schemas/final-schema.graphql`
    5. _(end downtime)_
