System.register(['./i18n'], function (_export) {
  var I18N, _classCallCheck, _createClass, TValueConverter, TCustomAttribute;

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      TValueConverter = (function () {
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
            return [I18N];
          }
        }]);

        return TValueConverter;
      })();

      _export('TValueConverter', TValueConverter);

      TCustomAttribute = (function () {
        function TCustomAttribute(element, i18n) {
          _classCallCheck(this, TCustomAttribute);

          this.element = element;
          this.service = i18n;
        }

        _createClass(TCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged() {
            if (this.element.parentElement !== undefined) {
              this.service.updateTranslations(this.element.parentElement);
            }
          }
        }], [{
          key: 'inject',
          value: [Element, I18N],
          enumerable: true
        }]);

        return TCustomAttribute;
      })();

      _export('TCustomAttribute', TCustomAttribute);
    }
  };
});