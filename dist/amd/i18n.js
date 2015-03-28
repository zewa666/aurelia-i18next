define(["exports", "i18next"], function (exports, _i18next) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var i18n = _interopRequire(_i18next);

  var I18N = exports.I18N = (function () {
    function I18N() {
      _classCallCheck(this, I18N);

      this.i18next = i18n;
      this.Intl = window.Intl;

      // check whether Intl is available, otherwise load the polyfill
      if (window.Intl === undefined) {
        System["import"]("Intl").then(function (poly) {
          window.Intl = poly;
        });
      }
    }

    _createClass(I18N, {
      setup: {
        value: function setup(options) {
          var defaultOptions = {
            resGetPath: "locale/__lng__/__ns__.json",
            lng: "en",
            getAsync: false,
            sendMissing: false,
            fallbackLng: "en",
            debug: false
          };

          i18n.init(options || defaultOptions);
        }
      },
      setLocale: {
        value: function setLocale(locale) {
          var _this = this;

          return new Promise(function (resolve) {
            _this.i18next.setLng(locale, resolve);
          });
        }
      },
      getLocale: {
        value: function getLocale() {
          return this.i18next.lng();
        }
      },
      NumberFormat: {
        value: function NumberFormat(locales, options) {
          return new this.Intl.NumberFormat(locales || this.getLocale(), options);
        }
      },
      tr: {
        value: function tr(key, options) {
          return this.i18next.t(key, options);
        }
      }
    });

    return I18N;
  })();
});