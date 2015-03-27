# aurelia-i18next

This plugin is part of the [Aurelia](http://www.aurelia.io/) platform. It sets up a wrapper for the [i18next](http://i18next.com/) library.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).

## How to intall this plugin?

1. In your project install the plugin via jspm with following command

  ```shell
  jspm install aurelia-i18next
  ```
2. Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app. Change it to look like this:

  ```html
  <body aurelia-app="main">
  ...
  ```
3. Create folder `locale` in your projects root
4. For each locale create a new folder with it's name (e.g. `en`, `de`, ...)
5. In those subfolders create a file named `translation.json` which contains your language specific translations. Below you can find a sample `en-EN` translation file. The full potential of i18next is achieved through a specific translation-file schema. Consult the [i18next docs](http://i18next.com/pages/doc_features.html) to find out more about it.

```javascript
{
  "score": "Score: __score__",
  "lives": "__count__ life remaining",
  "lives_plural": "__count__ lives remaining",
  "lives_indefinite": "a life remaining",
  "lives_plural_indefinite": "some lifes remaining",
  "friend": "A friend",
  "friend_male": "A boyfriend",
  "friend_female": "A girlfriend"
}
```

6.. Create (if you haven't already) a file `main.js` in your `src` folder with following content:

  ```javascript
  import {I18N} from 'aurelia-i18next';

  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-i18next');

    // get instance of the i18n plugin
    var instance = aurelia.container.get(I18N);
    // adapt options to your needs (see http://i18next.com/pages/doc_init.html)
    instance.setup({
      resGetPath : 'locale/__lng__/__ns__.json',
      lng : 'de',
      getAsync : true,
      sendMissing : false,
      fallbackLng : 'en',
      debug : false
    });

    aurelia.start().then(a => a.setRoot());
  }
  ```

## How to use this plugin
i18next translations work by setting up an active locale, which you've setup above in the init phase with the property `lng`.

### Setting the active locale
In order to change the active language you'd have to call the function `setLocale(localeName)` via code.

```javascript
import {I18N} from 'aurelia-i18next';

export class MyDemoVM {
	static inject() { return [I18N]; }
	constructor(i18n) {
	   this.i18n = i18n;
		this.i18n
		    .setLocale('de-DE')
		    .then( () => {
			// locale is loaded
		});
	}
	...
}
```

### Getting the active locale
To get the active locale you'd go with `getLocale()`:

```javascript
import {I18N} from 'aurelia-i18next';

export class MyDemoVM {
	static inject() { return [I18N]; }
	constructor(i18n) {
	    this.i18n = i18n;
		console.log(this.i18n.getLocale());
	}
	...
}
```

### Translating via code
Translating stuff via code works by using the method `tr`. You pass in the `key` as first parameter, followed by the optional second parameter `options` to specify in detail how the translations should be performed. Please consult the [i18next docs](http://i18next.com/pages/doc_features.html) for a detailed list of those:

```javascript
import {I18N} from 'aurelia-i18next';

export class MyDemoVM {
	static inject() { return [I18N]; }
	constructor(i18n) {
	    this.i18n = i18n;
		console.log(this.i18n.tr('mykey'));
	}
	...
}
```

### Translating with the TValueConverter
In order to do translations in a more declarative way from within your HTML markup you can use a custom ValueConverter named `t`. It takes exactly the same `options` as the code translation method `tr` but of course provides the key automatically.

You will find below a few examples of the available [i18next features](http://i18next.com/pages/doc_features.html)

```html
<template>
  <section>
    <div class="row">
      <div class="col-md-3">
        <h3>ValueConverter Examples</h3>
        <ul class="list-group">
          <li class="list-group-item">
            Translation with Variables: <br />
            ${ 'score' | t: {'score': userScore}}
          </li>

          <li class="list-group-item">
            Translation singular: <br />
            ${ 'lives' | t: { 'count': 1 } }
          </li>

          <li class="list-group-item">
            Translation plural: <br />
            ${ 'lives' | t: { 'count': 2 } }
          </li>

          <li class="list-group-item">
            Translation singular indefinite: <br />
            ${ 'lives' | t: { 'count': 1, indefinite_article: true  } }
          </li>

          <li class="list-group-item">
            Translation plural indefinite: <br />
            ${ 'lives' | t: { 'count': 2, indefinite_article: true } }
          </li>

          <li class="list-group-item">
            Translation without/with context: <br />
            ${ 'friend' | t } <br />
            ${ 'friend' | t: { context: 'male' } } <br />
            ${ 'friend' | t: { context: 'female' } }
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
```
