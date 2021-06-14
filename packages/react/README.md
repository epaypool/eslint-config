## Install

```sh
npm i @epaypool/eslint-config-react
```


## Use

This config is meant to be applied on top of one of the other base configs.

```js
module.exports = {
  'root': true,
  'extends': [
    '@epaypool/eslint-config-ts',
    '@epaypool/eslint-config-react'
  ]
};
```
