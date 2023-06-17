# Miguel's Portfolio

This repository contains the source code for the GitHub Pages site located at
https://gitmiguel27.github.io/portfolio/. It's a React-based site with a
Material UI-based design.

## Development

To get started developing the site, you'll need to enable pnpm:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Then, install the dependencies:

```bash
pnpm install
```

Finally, to run the development server:

```bash
pnpm run dev
```

To test your code for common issues, you can use ESLint:

```bash
pnpm run lint
```

## Deployment

To build a static version of the site, run this command:

```bash
pnpm run build
```

To deploy the site to GitHub Pages, however, you can either use this command:

```bash
pnpm run deploy
```

Or you can use the built-in GitHub Action called "Deploy".
