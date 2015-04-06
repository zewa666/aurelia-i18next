System.register(["./i18n", "./defaultTranslations/relative.time"], function (_export) {
  var I18N, translations, _createClass, _classCallCheck, RelativeTime;

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;
    }, function (_defaultTranslationsRelativeTime) {
      translations = _defaultTranslationsRelativeTime;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RelativeTime = _export("RelativeTime", (function () {
        function RelativeTime(i18n) {
          var _this = this;

          _classCallCheck(this, RelativeTime);

          this.service = i18n;

          Object.keys(translations["default"]).map(function (key) {
            var translation = translations["default"][key].translation;
            var options = i18n.i18next.options;

            if (options.interpolationPrefix !== "__" || options.interpolationSuffix !== "__") {
              for (var subkey in translation) {
                translation[subkey] = translation[subkey].replace("__count__", options.interpolationPrefix + "count" + options.interpolationSuffix);
              }
              console.log(translation);
            }

            _this.service.i18next.addResources(key, "translation", translation);
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
      })());
    }
  };
});