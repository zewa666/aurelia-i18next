System.register(['./i18n', 'aurelia-event-aggregator'], function (_export) {
  var I18N, EventAggregator, _classCallCheck, _createClass, BaseI18N;

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      BaseI18N = (function () {
        function BaseI18N(i18n, element, ea) {
          var _this = this;

          _classCallCheck(this, BaseI18N);

          this.i18n = i18n;
          this.element = element;

          this.__i18nDisposer = ea.subscribe('i18n:locale:changed', function (payload) {
            _this.i18n.updateTranslations(_this.element);
          });
        }

        _createClass(BaseI18N, [{
          key: 'attached',
          value: function attached() {
            this.i18n.updateTranslations(this.element);
          }
        }, {
          key: 'detached',
          value: function detached() {
            this.__i18nDisposer();
          }
        }], [{
          key: 'inject',
          value: [I18N, Element, EventAggregator],
          enumerable: true
        }]);

        return BaseI18N;
      })();

      _export('BaseI18N', BaseI18N);
    }
  };
});