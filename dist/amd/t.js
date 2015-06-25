define(['exports', './i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
});