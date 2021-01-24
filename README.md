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
    "lorem.1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque mattis, gravida lacus non, sollicitudin purus. Fusce finibus ut eros ut tincidunt. Integer lacinia elit quis quam volutpat venenatis. Praesent scelerisque neque eu rutrum vestibulum. Maecenas nec nunc vel dolor egestas consectetur id sit amet nibh. Nunc cursus consectetur aliquam. Quisque sed mattis lacus. Fusce lacinia, eros et maximus interdum, ante sem interdum eros, tristique elementum enim felis ac massa.",
    "missing.in.html": "nothing to show here"
}
```