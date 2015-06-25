System.register(['./i18n'], function (_export) {
  var I18N, _classCallCheck, _createClass, DfValueConverter;

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      DfValueConverter = (function () {
        function DfValueConverter(i18n) {
          _classCallCheck(this, DfValueConverter);

          this.service = i18n;
        }

        _createClass(DfValueConverter, [{
          key: 'toView',
          value: function toView(value, formatOptions, locale, dateFormat) {
            var df = dateFormat || this.service.df(formatOptions, locale || this.service.getLocale());

            return df.format(value);
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [I18N];
          }
        }]);

        return DfValueConverter;
      })();

      _export('DfValueConverter', DfValueConverter);
    }
  };
});