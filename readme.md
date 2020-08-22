# [WEB] CV Site

## Software versions

- node 12.14.1
- npm 6.13.4

## Avaliable scripts

- `npm run dev` - run development server with BrowserSync
- `npm run build` - create production build without eslint
- `npm run build` - create production build
- `npm run format` - format code with Prettier
- `npm run lint` - lint JavaScript code
- `npm run lint:fix` - lint JavaScript code with fixing

## Default Prettier and ESLint configurations

**.prettierrc**

```json
{
  "tabWidth": 2,
  "singleQuote": true
}
```

**.eslintrc.json**

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "error"
  }
}
```
