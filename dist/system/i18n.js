System.register(['i18next', './utils'], function (_export) {
  var i18n, assignObjectToKeys, _classCallCheck, _createClass, I18N;

  return {
    setters: [function (_i18next) {
      i18n = _i18next['default'];
    }, function (_utils) {
      assignObjectToKeys = _utils.assignObjectToKeys;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      I18N = (function () {
        function I18N(ea) {
          _classCallCheck(this, I18N);

          this.i18next = i18n;
          this.ea = ea;
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

            i18n.init(options || defaultOptions);
          }
        }, {
          key: 'setLocale',
          value: function setLocale(locale) {
            var _this = this;

            return new Promise(function (resolve) {
              _this.i18next.setLng(locale, function (tr) {
                _this.ea.publish('i18n:locale:changed');
                resolve(tr);
              });
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
            return this.i18next.t(key, assignObjectToKeys('', options));
          }
        }]);

        return I18N;
      })();

      _export('I18N', I18N);
    }
  };
});