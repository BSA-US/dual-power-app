# Dual Power App

The **Dual Power App** is a platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.

We’re launching in 2021 with support for [Dual Power Projects](https://dualpower.app).

* [What's up with the Dual Power App?](https://github.com/BSA-US/dual-power-app/issues/42)
* [Stack & contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/main/CONTRIBUTING.md)
* [Twitter](https://twitter.com/DualPowerApp)

## Project overview

### Right now: [Open Design + Build](https://dualpower.app/open-design)

- **Designers:** We need your help turning our [wireframes](https://www.figma.com/file/N6VFPqgNVovoXxy93Q6i4Q/Dual-Power-App-2021–present?node-id=0%3A1) & [information architecture](https://dualpower.app/docs/dual-power-app-ia.pdf) into high-fidelity components & prototypes. We're open to spontaneous contributions, as well as more formal projects coordinated with the team.
- **Engineers:** Build with us! We have a broad roadmap and some issues that are open to your contributions, and if you introduce yourself we can help you get started.

Join us in the [Discussions board](https://github.com/BSA-US/dual-power-app/discussions), and if you want to get more involved, come to one of our [public meetings every two weeks](https://dualpower.app/open-design) or join BSA Open Tech Development (OTD) on Basecamp by [sending BSA an intro](https://blacksocialists.us/contact).

## Contributing

While we're focusing on design so we can get to a buildable spec ASAP, you're free to experiment and submit PRs. Make sure you read the [contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/main/CONTRIBUTING.md) before you move on :slightly_smiling_face:

## Setup

1. Fork the [Dual Power App github repository](https://github.com/BSA-US/dual-power-app) and clone it locally.
2. Create a new branch:
    ```sh
    git checkout -b feature/my-cool-thing
    ```
3. Duplicate the `.env` files:
    ```sh
    cp .env.template .env
    ```
4. Install the correct version of Node.js using [node version manager](https://github.com/nvm-sh/nvm#installing-and-updating) (this is what `.nvmrc` is for)
    ```sh
    nvm install
    nvm use
    ```
5. Install `yarn` globally:
    ```sh
    npm install --global yarn
    ```
6. Install dependencies:
    ```sh
    yarn
    ```
7. [Sign up](https://vercel.com/signup) for a free vercel account. You need to import your fork of the dual power github repo into vercel. Deploy to vercel from the command line with:
    ```sh
    npx vercel
    ```


### Alternative setup with Nix

If you are familiar with [Nix](https://nixos.org), you can setup the necessary development tooling by running:

```sh
nix develop
```

### Run the Dual Power App locally

```sh
npx yarn dev
```
