# Dual Power App

The **Dual Power App** is a platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.

* [Regular meetings on Discord](https://discord.gg/BqdhzwM2aa)
* [Stack & contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/main/CONTRIBUTING.md)
* [Twitter](https://twitter.com/DualPowerApp)

## Project overview

### Right now: [Open Design + Build](https://dualpower.app/open-design)

- **Designers:** We need your help turning our [wireframes](https://www.figma.com/file/N6VFPqgNVovoXxy93Q6i4Q/Dual-Power-App-2021–present?node-id=0%3A1) & [information architecture](https://dualpower.app/docs/dual-power-app-ia.pdf) into high-fidelity components & prototypes. We're open to spontaneous contributions, as well as more formal projects coordinated with the team.
- **Engineers:** Build with us! We have a broad roadmap and some issues that are open to your contributions, and if you introduce yourself we can help you get started.

Join us in the [Discussions board](https://github.com/BSA-US/dual-power-app/discussions), and if you want to get more involved, come to one of our [public meetings](https://dualpower.app/open-design).

## Contributing

While we're focusing on design so we can get to a buildable spec ASAP, you're free to experiment and submit PRs. Make sure you read the [contributor guidelines](https://github.com/BSA-US/dual-power-app/blob/main/CONTRIBUTING.md) before you move on :slightly_smiling_face:

## Setup

1. Create a new branch:
    ```sh
    git checkout -b feature/my-cool-thing
    ```
2. Duplicate the `.env` files:
    ```sh
    cp .env.template .env
    ```
3. Install the correct version of Node.js (this is what `.nvmrc` does)
    ```sh
    nvm install
    nvm use
    ```
4. Enable `yarn`:
    ```sh
    corepack enable
    ```
5. Install dependencies:
    ```sh
    yarn
    ```
6. Install `vercel` globally:
    ```sh
    yarn global add vercel
    ```

### Alternative setup with Nix

If you are familiar with [Nix](https://nixos.org), you can setup the necessary development tooling by running:

```sh
nix develop
```

### Run the Dual Power App locally

```sh
vc dev
```
