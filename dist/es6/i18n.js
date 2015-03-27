import i18n from 'i18next';

export class I18N {

  constructor() {
    this.i18next = i18n;
  }

  setup(options) {
    var defaultOptions = {
      resGetPath : 'locale/__lng__/__ns__.json',
      lng : 'en',
      getAsync : false,
      sendMissing : true,
      fallbackLng : 'en',
      debug : true
    };

    i18n.init(options || defaultOptions);

    this.activeLocale = options !== undefined
      ? options.lng | defaultOptions.lng
      : defaultOptions.lng;
  }

  setLocale(locale) {
    return new Promise( (resolve) => {
      this.i18next.setLng(locale, resolve(t));
    });
  }

  getLocale() {
    return this.i18next.lng();
  }

  tr(key, options) {
    return this.i18next.t(key, options);
  }
}
