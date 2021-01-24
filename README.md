# Vue.js or not Vue.js...

A simple example to reproduce the Vue.js, AngularJs(or Angular2+), React.js variable replace system. In this case, is can be used to change language of website with many `json` files.

```js
let vue = new Vue();
vue.getValues("assets/values.json").then(result => vue.replaceTemplateValue(result));
```

## Start example project

```bash
$ npm install
$ npm run serve
```

## Dependencies

```properties
http-server="^0.12.3"
```

## Json example

```json
{
    "_home.title": "Vue.js or not Vue.js...",
    "test.message": "a test message",
    "test.bis": "A second test Message",
    "lorem.1": "Lorem ipsum ...",
    "missing.in.html": "nothing to show here"
}
```