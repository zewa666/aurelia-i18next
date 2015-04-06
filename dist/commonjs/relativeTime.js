"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var I18N = require("./i18n").I18N;

var translations = _interopRequireWildcard(require("./defaultTranslations/relative.time"));

var RelativeTime = exports.RelativeTime = (function () {
  function RelativeTime(i18n) {
    var _this = this;

    _classCallCheck(this, RelativeTime);

    this.service = i18n;

    Object.keys(translations["default"]).map(function (key) {
      _this.service.i18next.addResources(key, "translation", translations["default"][key].translation);
    });
  }

  _createClass(RelativeTime, {
    getRelativeTime: {
      value: function getRelativeTime(time) {
        var now = new Date();
        var diff = now.getTime() - time.getTime();

        var timeDiff = this.getTimeDiffDescription(diff, "day", 86400000);
        if (!timeDiff) {
          timeDiff = this.getTimeDiffDescription(diff, "hour", 3600000);
          if (!timeDiff) {
            timeDiff = this.getTimeDiffDescription(diff, "minute", 60000);
            if (!timeDiff) {
              timeDiff = this.getTimeDiffDescription(diff, "second", 1000);
              if (!timeDiff) {
                timeDiff = this.service.tr("now");
              }
            }
          }
        }

        return timeDiff;
      }
    },
    getTimeDiffDescription: {
      value: function getTimeDiffDescription(diff, unit, timeDivisor) {
        var unitAmount = (diff / timeDivisor).toFixed(0);
        if (unitAmount > 0) {
          return this.service.tr(unit, { count: parseInt(unitAmount), context: "ago" });
        } else if (unitAmount < 0) {
          var abs = Math.abs(unitAmount);
          return this.service.tr(unit, { count: abs, context: "in" });
        } else {
          return null;
        }
      }
    }
  }, {
    inject: {
      value: function inject() {
        return [I18N];
      }
    }
  });

  return RelativeTime;
})();