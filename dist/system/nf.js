System.register(["./i18n"], function (_export) {
  var I18N, _createClass, _classCallCheck, NfValueConverter;

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NfValueConverter = _export("NfValueConverter", (function () {
        function NfValueConverter(i18n) {
          _classCallCheck(this, NfValueConverter);

          this.service = i18n;
        }

        _createClass(NfValueConverter, {
          toView: {
            value: function toView(value, locale, formatOptions, numberFormat) {
              var nf = numberFormat || this.service.NumberFormat(locale || this.service.getLocale(), formatOptions);

              return nf.format(value);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [I18N];
            }
          }
        });

        return NfValueConverter;
      })());
    }
  };
});