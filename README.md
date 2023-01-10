# sandbox.elastic.dev

An experimental sandbox backed by [docsmobile](https://github.com/elastic/docsmobile) 🚌

You can find the live sandbox here: https://migration-sandbox.vercel.app/

## Dependencies for local development

1. A recent version of Node, preferably installed with [nvm](https://github.com/nvm-sh/nvm). If not using a node version manager, match the version in .nvmrc.
2. [Yarn](https://yarnpkg.com/), installed globally. If you have nvm, type `nvm use` to use the suggested node version. Otherwise, check the version in .nvmrc and match that.

## Getting started

These instructions are applicable for [local writing](https://docs.elastic.dev/dev/docs-overview#local-writing):
1. Clone the repository, then `cd` inside.
2. Run `nvm use`, this will attempt to set your environment up to use the node version indicated in the `.nvmrc`.  If `nvm use` reports that you need to install a particular version of node then do so.
3. Run `yarn`.
4. `cp .env-example .env`
5. Create a [GitHub Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with the `repo` scope, copy it, enable SSO, and add it to your `.env` file. This allows you to load content from other GitHub repos.
6. `yarn init-docs`. This initializes an ignored .docsmobile directory where docsmobile will do all of its magic stuff. This will create symlinks to everything inside of `docsmobile/template` so you can develop there and your changes will still take effect in `doc-site`.

Honestly that's it. You can then run:

- `yarn dev` if you want to develop the doc-site
- `yarn build` if you want to build the doc-site
- `yarn start` if you want to start your built instance

Note: The first time you run one of these commands after creating a presonal access token you may see errors, look for `remote: The 'elastic' organization has enabled or enforced SAML SSO.` and follow the instructions.

When the console reads `ready - started server on 0.0.0.0:3000, url: http://localhost:3000`, open a browser to localhost:3000. You'll see the page load as soon as the console outputs `event - compiled successfully`.
