import {I18N} from './i18n';

export class NfValueConverter {
  static inject() { return [I18N]; }
  constructor(i18n) {
    this.service = i18n;
  }

  toView(value, locale, formatOptions, numberFormat) {
    var nf = numberFormat || this.service.NumberFormat(locale || this.service.getLocale(), formatOptions);

    return nf.format(value);
  }
}
