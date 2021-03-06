#### Installation

```sh
npm i @tenjojeremy/webpack-config
```

Create `.webpack.manifest.js` to root

Create `.babelrc.js` to root with:

```js
module.exports = { extends: './node_modules/@tenjojeremy/webpack-config/.babelrc' }
```

Add to `Package.json`

```sh
  "scripts": {
    "start": "npx webpack-scripts start",
    "build": "npx webpack-scripts build",
    "build:analyze": "npm run build && npx webpack-scripts analyze",
  },
```

#### Usage with project

Start development

```sh
npm run start
```

Create Build

```sh
npm run build
```

Analyze Build

```sh
npm run analyze
```

#### Add hot module reloading (HMR)

Install:

```sh
npm i react-hot-loader
```

Add to index component, replace `IndexComp` as nessesary:

```js
import { hot } from 'react-hot-loader/root'
const IndexComp = () => {}
export default hot(IndexComp)
```

Reference: https://github.com/gaearon/react-hot-loader

#### .webpack.manifest.js options example

```js
const localIp = require('get-my-local-ip')

exports.manifest = {
  projectInfo: {
    name: 'Webpack Config',
    shortName: 'Webpack',
    description: 'Webpack Config',
    colors: {
      primary: '#6200ee',
      background: '#6200ee',
    },
    logo: {
      path: 'tests/logo.png',
    },
  },
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address,
    },
    entry: './tests/entry.js',
    plugins: {
      html: {
        bodyHtmlSnippet: '',
      },
    },
  },
}
```

### Manifest

if `logo-maskable` exists it will add a `142px` maskable icon to manifest

#### How it works - Specs

The `bin` option in the `package.json` file has a file named `webpack-scripts` and you call it in the installed app by using `yarn webpack-scripts start/build`

### Bundle Performance Checklist

#### Compression

- Brotli

#### HTML

- Minify
- Remove comment
- Remove new lines
- Remove whitespaces

#### Javascript

- Code split pages
- minify bundle
- Add js tag to head with defer attribute

#### CSS

- preload css
- add critical css to header

#### Images

- Convert images to Webp

#### Fonts

- use WOFF2 format
- preload fonts
- download font to use locally
