# Contributing to the Dual Power App

- **If you'd like to be actively involved with the team,** you can [contact us to join the Basecamp](https://blacksocialists.us/contact), and we'll get you set up to join calls, chat with us about the vision, ideas, and design, and get access to more documentation and ways to collaborate.
- **Anyone outside the team** is welcome to collaborate with us through [issues](https://github.com/BSA-US/dual-power-app/issues) and [pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Tech stack

The Dual Power App is a [Next.js](https://nextjs.org) app built on [ZEIT Now](https://zeit.co/home), using [ZEIT Now Serverless Functions](https://zeit.co/docs/v2/serverless-functions/introduction) for the API and [Fauna & GraphQL](https://docs.fauna.com/fauna/current/api/graphql/) for the database. It is written in [TypeScript](https://www.typescriptlang.org).

### Working on the Next.js client

- **CSS:** You should write very little CSS yourself. Use the pre-baked components in the components directory. For page layouts and tweaks, use [Windi](https://windicss.org/). If you find yourself styling a component, consider whether that is a reusable treatement that should instead be a prop on the component itself.
- **Interacting with APIs:** [Isomorphic Unfetch](https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch) (it's like axios, but waaay smaller)
- **Interacting with the database:** [Read `/db/queries/README.md`](https://github.com/BSA-US/dual-power-app/blob/main/db/queries/README.md) for examples

## Getting started

1. Make sure to read [BSA's strategy](https://blacksocialists.us/our-strategy) if you're not 100% on what a Dual Power Project is
2. See what's up in the [projects](https://github.com/BSA-US/dual-power-app/projects) and [issues](https://github.com/BSA-US/dual-power-app/issues)
3. [Set up commit signing](https://help.github.com/en/github/authenticating-to-github/signing-commits)

## Writing commit messages

- So everyone can more easily read your work, please follow [the Conventional Commits standard](https://www.conventionalcommits.org/) for your commit messages
- When working on an issue, [reference it](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests) in your commit message

This commit, in which I add this section of this document, might look like:
    ```
    docs(contrib): #17 add conventional commits
    ```

If I was doing this from a fork, I would instead say:
    ```
    docs(contrib): BSA-US/dual-power-app#17 add conventional commits
    ```

## Submitting a pull request

1. Test your work
2. Bring your work up to date by rebasing it onto this repo's `main` branch (see below)
3. Test your work again
4. Create a pull request
5. Summarize your changes and [mention any relevant issues](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests)
6. Submit your PR

### Rebasing

New to rebasing? It can be daunting the first time, but we'll get through this together.

#### Rebasing when collaborating from a fork

1. The first time you do this, add this repo as a remote in your forked repo:
    ```sh
    git remote add upstream https://github.com/BSA-US/dual-power-app.git
    git fetch upstream
    ```
2. Rebase your local branch onto `upstream/main`
    ```sh
    git checkout my-branch
    git rebase upstream/main
    ```
3. Resolve the merge conflicts, choosing to keep your changes wherever you made them, and for all other conflicts choosing what is on `upstream/main`
4. When finished, force-push your newly in-sync branch:
    ```sh
    git push -f origin my-branch
    ```
5. Create a pull request across forks, making note of your changes

#### Rebasing when collaborating from within this repo

1. Rebase your local branch onto `main`
    ```sh
    git checkout my-branch
    git rebase main
    ```
2. Resolve the merge conflicts, choosing to keep your changes wherever you made them, and for all other conflicts choosing what is on `main`
3. When finished, force-push your newly in-sync branch:
    ```sh
    git push -f origin my-branch
    ```
4. Create a pull request, making note of your changes

## But what should I work on?

Great question. Whatever you want!

We have our own internally decided priorities which you can see:
- summarized in our [README](https://github.com/BSA-US/dual-power-app/blob/main/README.md) and
- fully broken down in the [issues](https://github.com/BSA-US/dual-power-app/issues)

Are we missing something essential? [Create an issue](https://github.com/BSA-US/dual-power-app/issues/new), assign it to yourself, and get going!!
