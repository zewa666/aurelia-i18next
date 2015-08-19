define(['exports', './i18n', 'aurelia-templating'], function (exports, _i18n, _aureliaTemplating) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var TValueConverter = (function () {
    function TValueConverter(i18n) {
      _classCallCheck(this, TValueConverter);

      this.service = i18n;
    }

    _createClass(TValueConverter, [{
      key: 'toView',
      value: function toView(value, options) {
        return this.service.tr(value, options);
      }
    }], [{
      key: 'inject',
      value: function inject() {
        return [_i18n.I18N];
      }
    }]);

    return TValueConverter;
  })();

  exports.TValueConverter = TValueConverter;

  var TCustomAttribute = (function () {
    function TCustomAttribute(element, i18n) {
      _classCallCheck(this, _TCustomAttribute);

      this.element = element;
      this.service = i18n;
    }

    var _TCustomAttribute = TCustomAttribute;

    _createClass(_TCustomAttribute, [{
      key: 'valueChanged',
      value: function valueChanged() {
        if (this.element.parentElement !== undefined) {
          this.service.updateTranslations(this.element.parentElement);
        }
      }
    }], [{
      key: 'inject',
      value: [Element, _i18n.I18N],
      enumerable: true
    }]);

    TCustomAttribute = _aureliaTemplating.customAttribute('t')(TCustomAttribute) || TCustomAttribute;
    return TCustomAttribute;
  })();

  exports.TCustomAttribute = TCustomAttribute;
});