import {I18N} from './i18n';

export class TValueConverter {
  static inject() { return [I18N]; }
  constructor(i18n) {
    this.service = i18n;
  }

  toView(value, options) {
    return this.service.tr(value, options);
  }
}

export class TCustomAttribute {

  static inject = [Element, I18N];

  constructor(element, i18n) {
    this.element = element;
    this.service = i18n;
  }

  valueChanged(){
    console.log(this.element.parentElement);
    this.service.updateTranslations(this.element.parentElement);
  }
}
