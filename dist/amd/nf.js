define(['exports', './i18n'], function (exports, _i18n) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var NfValueConverter = (function () {
    function NfValueConverter(i18n) {
      _classCallCheck(this, NfValueConverter);

      this.service = i18n;
    }

    _createClass(NfValueConverter, [{
      key: 'toView',
      value: function toView(value, formatOptions, locale, numberFormat) {
        var nf = numberFormat || this.service.nf(formatOptions, locale || this.service.getLocale());

        return nf.format(value);
      }
    }], [{
      key: 'inject',
      value: function inject() {
        return [_i18n.I18N];
      }
    }]);

    return NfValueConverter;
  })();

  exports.NfValueConverter = NfValueConverter;
});