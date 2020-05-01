# Dual Power App

The **Dual Power App** is a platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.

We’re launching in 2020 with support for [Dual Power Projects](https://github.com/BSA-US/dual-power-app/wiki/Dual-power-project).

[More about the Dual Power App](https://github.com/BSA-US/dual-power-app/wiki/Dual-Power-App)
[Stack & contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/master/CONTRIBUTING.md)
[Twitter](https://twitter.com/DualPowerApp)

## Project overview

### Right now: Giving the project a presence

- [x] Project scaffold
- [x] Teaser page layout
- [ ] Branding
- [ ] [World of Jackson](https://github.com/BSA-US/world-of-jackson), a sister project that introduces people to [Cooperation Jackson](https://github.com/BSA-US/dual-power-app/wiki/Cooperation-Jackson) and what a Dual Power Project looks like

### What's next: Listing Dual Power Projects

- [ ] A User can submit a Dual Power Project
- [ ] A User can post updates on their Dual Power Project
- [ ] A visitor can see detailed info about a Dual Power Project
- [ ] A visitor can flag a Dual Power Project
- [ ] A visitor can see Dual Power Projects on the [Dual Power Map](https://github.com/BSA-US/dual-power-app/wiki/Dual-Power-Map)

### In the [roadmap](https://github.com/BSA-US/dual-power-app/projects/6)

- [ ] Multi-User Dual Power Projects
- [ ] Public change-tracking & votes
- [ ] Resources for developing Dual Power Projects
- [ ] Crowdfunding
- [ ] Team chat
- [ ] Support for other organizations, such as [WSDEs](https://github.com/BSA-US/dual-power-app/wiki/Worker-self‐directed-enterprise)

## Contributing

Make sure you read the [contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/master/CONTRIBUTING.md) before you move on :slightly_smiling_face:

## Setup

### Basic setup

1. Check out the `dev` branch:
    ```sh
    git checkout dev
    ```
2. Create a new branch:
    ```sh
    git checkout -b feature/my-cool-thing
    ```
3. Install dependencies:
    ```sh
    yarn
    ```

### Run the Dual Power App

```sh
yarn dev-remote
```

This will use the dev API hosted at [https://dual-power-app-git-dev.blacksocialists.now.sh/api](https://dual-power-app-git-dev.blacksocialists.now.sh/api)

### Develop components in isolation

```sh
yarn storybook
```

### Develop API endpoints

To make changes to the API, you'll first need to create your own Fauna & Vercel projects:

#### Additional setup

1. Configure your [Fauna](https://fauna.com) database
    1. Create an account
    2. Create a database
    3. In the GraphQL section, import [the schema](https://github.com/BSA-US/dual-power-app/blob/dev/db/schema.graphql)
2. Configure your [Vercel](https://vercel.com) project
    1. Create an account
    2. Create a project
    3. In the general settings, add the following environment variables for each of the three environments:
        - `FAUNADB_SECRET`: A `server` key generated in the Fauna console
        - `FAUNADB_PUBLIC_SECRET`: A `public` key generated in the Fauna console
3. Configure your local environment
    1. Install `now` globally:
        ```sh
        yarn global add now
        ```
    2. Link your local repo to your Vercel project:
        ```sh
        now
        ```
    3. Pull your environment variables:
        ```sh
        now env pull
        ```

#### Run the Dual Power App with your local API

```sh
now dev
```
