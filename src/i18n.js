import i18n from 'i18next';
import {assignObjectToKeys} from './utils';

export class I18N {

  constructor(ea) {
    this.i18next = i18n;
    this.ea = ea;
    this.Intl = window.Intl;

    // check whether Intl is available, otherwise load the polyfill
    if(window.Intl === undefined) {
      System.import('Intl').then( (poly) => {
        window.Intl = poly;
      });
    }
  }

  setup(options) {
    var defaultOptions = {
      resGetPath : 'locale/__lng__/__ns__.json',
      lng : 'en',
      getAsync : false,
      sendMissing : false,
      fallbackLng : 'en',
      debug : false
    };

    i18n.init(options || defaultOptions);
  }

  setLocale(locale) {
    return new Promise( resolve => {
      this.i18next.setLng(locale, tr=>{
        this.ea.publish("i18n:locale:changed");
        resolve(tr);
      });
    });
  }

  getLocale() {
    return this.i18next.lng();
  }

  nf(options, locales) {
    return new this.Intl.NumberFormat(locales || this.getLocale(), options);
  }

  df(options, locales) {
    return new this.Intl.DateTimeFormat(locales || this.getLocale(), options);
  }

  tr(key, options) {
    return this.i18next.t(key, assignObjectToKeys('', options));
  }
}
