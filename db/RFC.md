# RFC: Event-based data model + store

### Abstract

This RFC proposes an entity model compatible with our MVP wireframes, and an implementation for [Fauna](https://docs.fauna.com/fauna/current/) in which a client writes mostly-immutable Events to the database and reads back entities resolved from those Events.

### Contents

1. [Introduction](#introduction)
2. [Luciichart](#lucidchart)
2. [Entity model](#entity-model)
    1. [Entities](#entities)
    2. [Out-of-scope entities and relations](#out-of-scope-entities-and-relations)
3. [Database implementation](#database-implementation)
    1. [Fauna](#fauna)
        1. [Concerns with Fauna](#concerns-with-fauna)
    2. [Events](#events)
        1. [Semi-immutability](#semi-immutability)
            1. [Data controls](#data-controls)
    3. [Entity resolution](#entity-resolution)
        1. [Concerns with entity resolution](#concerns-with-entity-resolution)
4. Next steps

## Introduction

Sophisticated needs for our data model & data store include:

- **Versioned content:** The Proposal flow requires support for a rich text body with discrete drafts, with each draft having distinct related entities (e.g. Suggestions, Polls).
- **Status on changes:** In the long term, the Proposal flow will be applied to other entities (e.g. documents, crowdfunding campaigns). The ambition for democracy on the platform is both universal, so there's value in setting up the model such that we can later opt to subject any change to the proposal flow.
- **History:** User and Circle dashboards provide a feed of both entities (e.g. Posts) and changes to entities (e.g. voting period for a poll ended), so a client will need to be able to query across a set of changes to many items.

Long-term concerns include:

- *Feature compatibility:* While out of scope, we are confident about some upcoming features that we'd like to know our MVP entity model does not preclude.
- *Extensibility:* BSA has other active and planned projects that would ideally integrate directly with Dual Power App, and such integration would require ability to save data not represented by the core entity model. If we set reasonable constraints, it may be possible to support this kind of "third-party" development without changes to the structure of the data store.
- *Protocol-first:* Based on prior discussions and our goals to interoperate with a broader ecosystem of platforms, we are likely to move to a decentralized architecture in the distant future. This RFC hopes to present a solution where the core patterns of interacting with the data store don't change (i.e. query language changes are ok, i.e. query structure changes are discouraged), and that clients and nodes communicate with one another using the same pattern.

## Lucidchart

Part of this proposal is a [Lucidchart document], containing a class diagram of the entity model, a domain diagram of the database implementation, and investigation into the considered approaches.

## Entity model

- [ ] Todo: List entities

See this model rendered as a [class diagram in Lucidechart]

### Entities

- [ ] _TODO: Add missing entities:_
  - [ ] _`Post`_
- [ ] _TODO: Add fields to entities_
- [ ] _TODO: List all entities below_

<details>
<summary>All entities (WIP):</summary>

- **`Draft`:** Represents a versioned passage of rich text. Accepts suggestions, and may be considered "codified" when a `Poll` passes. Belongs to a `Proposal`. Could support other parents in the future, for `Circle` resources to be democratically updated on an ongoing basis. <details>
  ```ts
  interface Draft {
    parent: Proposal // | Document | Desire | Engagement | Fund
    suggestions: Suggestion[]
    poll?: Poll
  }
  ```
  </details>

</details>

### Out of scope entities and relations

The class diagram for this proposal includes likely upcoming features that are out of scope for MVP, to ensure forward compatiibility. These are drawn into the diagram at a reduced opacity, and won't be fully fleshed out until after this proposal.

- `Proposal`s resulting in new or updated `Document`s, `Desire`s, `Engagement`s, `Fund`s, and `VoteModelType`s.
- **Liquid democracy:** Delegate your `Vote` to another `User`.
- **`CircleRole`:** A means of delegating authority to a `User`. A `CircleRole` and grants/revocations thereof would likely be bound to `Proposal`s and authority delegated by a different `CircleRole`.
- **`Federation`:** A formation of many `Circle`s. A `Federation` differs from a parent `Circle` in that the `Circle` is not "part of" the `Federation`, but a participant, an can be active in many `Federation`s just as a `User` may be active in many `Circle`s.
- *Social connections:*
  - **`Watch`:** Represents a `User` _receiving updates about_ a `User | Circle`. This is similar to following on another social platform, but the language is explicitly selected to avoid a connotation of endorsement.
  - **`Boost`:** Represents a `User | Circle` _supporting, elevating, or endorsing_ a `User | Circle`. This was conceived alongside `Watch` as an alternative to following, but could be generalized to a more broad idiom.

## Database implementation

tk

### Fauna

tk

#### Concerns with Fauna

tk

### Events

tk

#### Semi-immutability

With a collection of `Event`s capturing all changes to entities, there's no need to ever update an `Event`, with the exceptions of migrations and user-requested data removal. Given an uncorrupted collection of `Event`s, `Entity` state is replayable from the beginning of time.

##### Data controls

This proposal leaves the problem of permanent data removal for later, but reiterates a person's right to recall data. Votes to approve this implementation should be considered an endorsement of user-defined retention policies, visibility controls, and bulk delete functionality. [Fauna's ABAC](https://docs.fauna.com/fauna/current/security/abac) can be used for visibility controls, UDFs can redact items that are past their set retention time and due for removal, and bulk deletes may involve some migration of related entities with UDFs.

### Entity resolution

Since an `Event` represents a change, it's not necessary to persist entities to the database.

#### GraphQL schema

- [ ] _TODO: Add demo schema_

Our schema for this approach would differ from an entities-first schema in the following ways:
- Most types would become [embedded types](https://docs.fauna.com/fauna/current/api/graphql/directives/d_embedded)
- There would be a new collection for `Event`s
- There would be more and stricter mutations

#### Alternatives to entity resolution in the database

- **Don't use `Event`s, and instead create & mutate entities directly:** With this approach basic CRUD operations would be easiest to scaffold. However, due to the openness of entities to mutations, more collection-level permissions would be required to enforce safe mutations (as opposed to index-level permissions and input validation). Additionally, our data model is sufficiently complex that additional schema or logic would be required to resolve things like an activity feed or document history anyway.
- **Use `Event`s, but persist entity state along with the `Event`s:** This was initially the preferred option in this proposal. Basic entity queries would be free with GraphQL schema upload, and only mutations would require custom logic in UDFs. However, it was raised in the 9/1 Open Design + Build meeting that a buggy mutation UDF slipping through the crack would cause destructive changes to our data, the approach of resolving entities would mean no UDFs need to update data unless the Events collection is migrated. There's also a possibility of state drift within the database itself, between the event log and the entities.
- **Use `Event`s, and resolve entity state on the client instead of in the database:** This option was proposed as a means of reducing the number and size of client-db transactions and enabling message passing between clients. This option seems infeasible, considering the size of initial load times would increase over time unless we maintained a second GraphQL service in front of Fauna with a cache of entity state.

See [the diagram] for a breakdown of pros & cons with each approach.

#### Concerns with entity resolution

- **Performance:** While Fauna is very fast, combing through a log for just-in-time resolution of entities is in most cases slower than directly serving an entity from its own and related table. We should keep an eye on this but there isn't hard data on this impact yet—and, with Fauna, we will not need to hit an API in many places we otherwise would have.
- **Deriving entity state from history sounds complex**: This is true, but the concerns noted in the [introduction](#introduction) demand complexity in any approach. With a traditional database this means functions and views or an external API, and with Fauna this means UDF. The priority, then, is about consolidating that complexity and putting it in places where it minimizes risk [(see the note above on the second alternative to entity resoltuion)](#alternatives-to-entity-resolution-in-the-database). The proposed approach requires UDFs for resolution in all reads, but reduces the problem space in writes to validation. Additionally, core resolution functionality can be encapsulated in reusable UDFs called within resoslver UDFs.
- **Most people haven't written FQL, and UDFs may introduce a learning curve:** Syntax always takes a minute to get comfortable with, and this is especially the language with query languages as common patterns aren't as established as with programming and markup langauges. That said, while niche, FQL is pretty quick to learn if you think about it as a strict functional programming language—that is, it's essentially a set of functions that accept parameters, and the language-specific syntax is really minimal. After writing your first UDF or two, you'll be self-sufficient with the [cheat sheet](https://docs.fauna.com/fauna/current/api/fql/cheat_sheet). SQL users can [read this quick comparison between SQL and FQL](https://docs.fauna.com/fauna/current/start/fql_for_sql_users).

## Next steps

tk

### Upcoming changes

tk

### Votes

- Entity model: TBD
- Database implementation: TBD
