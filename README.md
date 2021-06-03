# Dual Power App

The **Dual Power App** is a platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.

We’re launching in 2021 with support for [Dual Power Projects](https://github.com/BSA-US/dual-power-app/wiki/Dual-power-project).

* [More about the Dual Power App](https://github.com/BSA-US/dual-power-app/wiki/Dual-Power-App)
* [Stack & contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/master/CONTRIBUTING.md)
* [Twitter](https://twitter.com/DualPowerApp)

## Project overview

### Right now: Open Design with [@Manhattan-Hydraulics](https://github.com/Manhattan-Hydraulics)

We're working with @Manhattan-Hydraulics to build out the information architecture, wireframes, and design & tech patterns for the MVP of Dual Power App. This will be an open process that you can follow at [@DualPowerApp](https://twitter.com/DualPowerApp) (or the [Discussions](https://github.com/BSA-US/dual-power-app/discussions)), or, if you want to get more involved, join us on Basecamp by [sending BSA an intro with some links to your work](https://blacksocialists.us/contact).

## Contributing

While we're focusing on design so we can get to a buildable spec ASAP, you're free to experiment and submit PRs. Make sure you read the [contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/master/CONTRIBUTING.md) before you move on :slightly_smiling_face:

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
    yarn global add vercel
    ```

### Run the Dual Power App locally

```sh
vc dev
```

### Develop components in isolation

```sh
yarn storybook
```
