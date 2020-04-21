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

1. Check out the `dev` branch:
    ```sh
    git checkout dev
    ```
2. Create a new branch:
    ```sh
    git checkout -b feature/my-cool-thing
    ```
3. Duplicate the `.env` files:
    - `.env.template` → `.env`
    - `.env.build.template` → `.env.build`
4. Install dependencies:
    ```sh
    yarn
    ```
5. Install `now` globally:
    ```sh
    yarn global add now
    ```

### Run the Dual Power App locally

```sh
now dev
```

### Develop components in isolation

```sh
yarn storybook
```
