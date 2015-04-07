System.register(["./relativeTime"], function (_export) {
  var RelativeTime, _createClass, _classCallCheck, RtValueConverter;

  return {
    setters: [function (_relativeTime) {
      RelativeTime = _relativeTime.RelativeTime;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RtValueConverter = _export("RtValueConverter", (function () {
        function RtValueConverter(relativeTime) {
          _classCallCheck(this, RtValueConverter);

          this.service = relativeTime;
        }

        _createClass(RtValueConverter, {
          toView: {
            value: function toView(value) {
              return this.service.getRelativeTime(value);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [RelativeTime];
            }
          }
        });

        return RtValueConverter;
      })());
    }
  };
});