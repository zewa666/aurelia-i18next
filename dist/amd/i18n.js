define(['exports', 'i18next', './utils'], function (exports, _i18next, _utils) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _i18n = _interopRequire(_i18next);

  var I18N = (function () {
    function I18N() {
      _classCallCheck(this, I18N);

      this.i18next = _i18n;
      this.Intl = window.Intl;

      if (window.Intl === undefined) {
        System['import']('Intl').then(function (poly) {
          window.Intl = poly;
        });
      }
    }

    _createClass(I18N, [{
      key: 'setup',
      value: function setup(options) {
        var defaultOptions = {
          resGetPath: 'locale/__lng__/__ns__.json',
          lng: 'en',
          getAsync: false,
          sendMissing: false,
          fallbackLng: 'en',
          debug: false
        };

        _i18n.init(options || defaultOptions);
      }
    }, {
      key: 'setLocale',
      value: function setLocale(locale) {
        var _this = this;

        return new Promise(function (resolve) {
          _this.i18next.setLng(locale, resolve);
        });
      }
    }, {
      key: 'getLocale',
      value: function getLocale() {
        return this.i18next.lng();
      }
    }, {
      key: 'nf',
      value: function nf(options, locales) {
        return new this.Intl.NumberFormat(locales || this.getLocale(), options);
      }
    }, {
      key: 'df',
      value: function df(options, locales) {
        return new this.Intl.DateTimeFormat(locales || this.getLocale(), options);
      }
    }, {
      key: 'tr',
      value: function tr(key, options) {
        return this.i18next.t(key, _utils.assignObjectToKeys('', options));
      }
    }]);

    return I18N;
  })();

  exports.I18N = I18N;
});