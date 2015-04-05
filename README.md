# aurelia-i18next

This plugin is part of the [Aurelia](http://www.aurelia.io/) platform. It sets up a wrapper for the [i18next](http://i18next.com/) library.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).

## How to install this plugin?

1. In your project install the plugin via `jspm` with following command

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
  "lives_plural_indefinite": "some lives remaining",
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
      .plugin('aurelia-i18next', (instance) => {
        // adapt options to your needs (see http://i18next.com/pages/doc_init.html)
        instance.setup({
          resGetPath : 'locale/__lng__/__ns__.json',
          lng : 'de',
          getAsync : true,
          sendMissing : false,
          fallbackLng : 'en',
          debug : false
        });
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

### Complex objects for variables
In some cases it might be useful to define variables via complex objects. Let's take a look at below example. It shows a validation message to hint the user that a given field should be in range of min and max.
Now we could easily pass min and max as separate variables but on the other hand that involves more work you'd have to do manually if the source is a object.

```javascript
var resources = {
  en: {
    translation: {
      "complex": '__field__ should be between __threshold.min__ and __threshold.max__'
    }
  }
};
```

So in order to avoid that you may simply pass in the object as a whole and the library will pickup all the necessary information and create the proper options object.
You can also mix and match it with simple variables.

```javascript
var options = {
  'threshold': {
    'min': 1,
    'max': 10
  },
  'field': 'Age'
};

i18n.tr('complex', options);
// --> Age should be between 1 and 10
```




### Formatting numbers via code
For displaying numbers in different formats, this plugin makes use of the [Internationalization API NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat). It leverages the same locales used for the translation methods mentioned in the install process of the plugin.

The API provides access to the `Intl NumberFormat` with the method `NumberFormat`. This function takes the an options object representing the formatting options as the first and the locale as the second parameter.

Below is an example how to access the NumberFormat via code:

```javascript
import {I18N} from 'aurelia-i18next';

export class MyDemoVM {
  static inject() { return [I18N]; }
	constructor(i18n) {
	  this.i18n = i18n;
	    
	  // create a NumberFormat with German locale
    var nf = this.i18n.nf(undefined, 'de');
	  var result = nf.format(123456.123);
		
	  console.log(result);
	  // output => 123.456,123

		
	  // create a NumberFormat with currency options
	  var nf = this.i18n.NumberFormat({ style: 'currency', currency: 'EUR' }, 'de');

	  var result = nf.format(123456.123);
		
	  console.log(result);
	  // output => 123.456,123 €  	  
	}
	...
}
```


### Formatting numbers with NfValueConverter
A more declarative way is to use the `nf` ValueConverter from within your HTML markup. It essentially works the same way as the code version. Take a look at the following example:

```html
<div class="col-md-3">
  <h3>ValueConverter Number Examples</h3>
  <ul class="list-group">
    <li class="list-group-item">
      Numberformat with default locale/format:
      ${ 1234567.890 | nf : undefined : selectedLocale}
    </li>
    <li class="list-group-item">
      Numberformat with different locale default format:
      ${ 1234567.890 | nf : undefined : 'de'}
    </li>
    <li class="list-group-item">
      Numberformat with different locale/format:
      ${ 1234567.890 | nf : { style: 'currency', currency: 'EUR' } : 'de'}
    </li>
  </ul>
</div>
```

> Note that if you provide the active locale as a bound VM property, the ValueConverter will be re-evaluated as soon as the property value changes, resulting in automatic re-formatting of your number.


### Formatting dates via code

The Intl. API provides means to [format DateTimes](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) as well. Use the method `df` to access that feature with the same arguments used for NumberFormat
Below you'll find an example how to use those via code:

```javascript
import {I18N} from 'aurelia-i18next';

export class MyDemoVM {
  static inject() { return [I18N]; }
	constructor(i18n) {
	  this.i18n = i18n;
	    
	  // create a DateTimeFormat with German locale
    var df = this.i18n.df(undefined, 'de');
	  var result = df.format(new Date(2000, 0, 1, 0,0,1))
		
	  console.log(result);
	  // output => 1.1.2000

		
	  // create a DateTime with time and 2-digit display
	  var options = {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false
    };
	  var df = this.i18n.df(options, 'de');

	  var result = df.format(new Date(2000, 0, 1, 0,0,1));
		
	  console.log(result);
	  // output => 01.01.2000 00:00:01  	  
	}
	...
}
```

> Remember that if you pass in `undefined` for the options parameter you'll get the default formatting options

### Formatting dates with DfValueConverter
A more declarative way is to use the `df` ValueConverter from within your HTML markup. It essentially works the same way as the code version. Take a look at the following example, which defines a VM property myDate:


```html
<div class="col-md-3">
  <h3>ValueConverter Date Examples</h3>
  <ul class="list-group">
    <li class="list-group-item">
      DateFormat with default locale/format:
      ${ myDate | df : undefined : selectedLocale}
    </li>
    <li class="list-group-item">
      DateFormat with different locale default format:
      ${ myDate | df : undefined : 'de'}
    </li>
    <li class="list-group-item">
      DateFormat with different locale/format:
      ${ myDate | df : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } : 'de'}
    </li>
  </ul>
</div>
```
