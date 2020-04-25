## Updating the schema

`schema.graphql` is the source of truth.

We host on [Fauna](https://fauna.com), which automatically generates much of the schema based on the core types. Given this schema, where:

- `Foo` & `Bar` have a one-to-one relationship,
- `Foo` & `Baz` have a one-to-many relationship,
- `Foo` & `Qux` have a many-to-many relationship, and
- `Bar` & `Baz` have a many-to-one relationship:

```graphql
type Foo {
  bar: Bar,
  bazzes: [Baz!] @relation
  quxes: [Qux!] @relation
}

type Bar {
  foo: Foo,
}

type Baz {
  bar: Bar!
  foo: Foo
}

type Qux {
  foos: [Foo!] @relation
}
```

Fauna will, on import, generate this schema:

```graphql
directive @embedded on OBJECT
directive @collection(name: String!) on OBJECT
directive @index(name: String!) on FIELD_DEFINITION
directive @resolver(
  name: String
  paginated: Boolean! = false
) on FIELD_DEFINITION
directive @relation(name: String) on FIELD_DEFINITION
directive @unique(index: String) on FIELD_DEFINITION
type Bar {
  _id: ID!
  _ts: Long!
  foo: Foo
}

input BarFooRelation {
  create: FooInput
  connect: ID
  disconnect: Boolean
}

input BarInput {
  foo: BarFooRelation
}

type Baz {
  _id: ID!
  _ts: Long!
  bar: Bar!
  foo: Foo
}

input BazBarRelation {
  create: BarInput
  connect: ID
}

input BazFooRelation {
  create: FooInput
  connect: ID
  disconnect: Boolean
}

input BazInput {
  bar: BazBarRelation
  foo: BazFooRelation
}

type BazPage {
  data: [Baz]!
  after: String
  before: String
}

scalar Date

type Foo {
  bazzes(
    _size: Int
    _cursor: String
  ): BazPage!
  _id: ID!
  quxes(
    _size: Int
    _cursor: String
  ): QuxPage!
  bar: Bar
  _ts: Long!
}

input FooBarRelation {
  create: BarInput
  connect: ID
  disconnect: Boolean
}

input FooBazzesRelation {
  create: [BazInput]
  connect: [ID]
  disconnect: [ID]
}

input FooInput {
  bar: FooBarRelation
  bazzes: FooBazzesRelation
  quxes: FooQuxesRelation
}

type FooPage {
  data: [Foo]!
  after: String
  before: String
}

input FooQuxesRelation {
  create: [QuxInput]
  connect: [ID]
  disconnect: [ID]
}

scalar Long

type Mutation {
  createQux(data: QuxInput!): Qux!
  updateBaz(
    id: ID!
    data: BazInput!
  ): Baz
  createFoo(data: FooInput!): Foo!
  deleteBar(id: ID!): Bar
  updateQux(
    id: ID!
    data: QuxInput!
  ): Qux
  createBar(data: BarInput!): Bar!
  deleteBaz(id: ID!): Baz
  updateFoo(
    id: ID!
    data: FooInput!
  ): Foo
  createBaz(data: BazInput!): Baz!
  updateBar(
    id: ID!
    data: BarInput!
  ): Bar
  deleteFoo(id: ID!): Foo
  deleteQux(id: ID!): Qux
}

type Query {
  findFooByID(id: ID!): Foo
  findQuxByID(id: ID!): Qux
  findBazByID(id: ID!): Baz
  findBarByID(id: ID!): Bar
}

type Qux {
  _id: ID!
  _ts: Long!
  foos(
    _size: Int
    _cursor: String
  ): FooPage!
}

input QuxFoosRelation {
  create: [FooInput]
  connect: [ID]
  disconnect: [ID]
}

input QuxInput {
  foos: QuxFoosRelation
}

type QuxPage {
  data: [Qux]!
  after: String
  before: String
}

scalar Time
```

## To do

- [ ] Add mutations
- [ ] Add error handling
