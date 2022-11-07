<h1 align="center">
  Saul Guardado Portfolio
</h1>
<p align="center">
  <a href="https://saulguardado.dev" target="_blank">saulguardado.dev</a>
</p>
<h3 align="center">Built With</h3>
<p align="center"> 
   <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> 
      <img src="https://cdn.cosmicjs.com/0e5d42c0-dfad-11e9-8580-4df517ea2cd1-nextjs.jpg" alt="Nextjs" width="45" height="45"/> 
   </a> 
   <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="45" height="45"/> 
   </a> 
   <a href="https://www.mantine.dev/" target="_blank" rel="noreferrer">
      <img src="https://avatars.githubusercontent.com/u/79146003?s=280&v=4" alt="Mantine" width="45" height="45"/>
   </a>
 <a href="https://emotion.sh" target="_blank" rel="noreferrer">
      <img src="https://emotion.sh/logo-48x48.png" alt="Emotion" width="45" height="45"/>
   </a>
</p>


## 🛠 Installation & Set Up

1. Install dependencies

```sh
  npm install
```

2. Start the development server

```sh
  npm run dev
```

## 🚀 Building and Running for Production

1. Generate a full static production build

```sh
  npm run build
```

1. Preview the site as it will appear once deployed

```sh
  npm run start
```

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
