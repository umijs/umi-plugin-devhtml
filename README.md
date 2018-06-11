# umi-plugin-devHtml

Plugin to save a physical HTML file for `umi dev`.

## Usage

Install

```bash
$ npm install --save umi-plugin-devHtml
```

Config via `.umirc.js`,

```js
export default {
  plugins: ['umi-plugin-devHtml'],
}
```

## Test via example

```bash
$ cd example
$ DEBUG=umi-plugin* CLEAR_CONSOLE=none umi dev
```

Then toggle the `modifyHtml` config in `example/.umirc.js`, and check the `examples/pages/.umi/index.html`.

## Notice

1. This plugin don't support MPA(multiple-page-application)
