define(["exports", "./relativeTime"], function (exports, _relativeTime) {
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RelativeTime = _relativeTime.RelativeTime;

  var RtValueConverter = exports.RtValueConverter = (function () {
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
  })();
});