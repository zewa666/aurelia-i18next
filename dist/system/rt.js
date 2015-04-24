System.register(['./relativeTime'], function (_export) {
  var RelativeTime, _classCallCheck, _createClass, RtValueConverter;

  return {
    setters: [function (_relativeTime) {
      RelativeTime = _relativeTime.RelativeTime;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      RtValueConverter = (function () {
        function RtValueConverter(relativeTime) {
          _classCallCheck(this, RtValueConverter);

          this.service = relativeTime;
        }

        _createClass(RtValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return this.service.getRelativeTime(value);
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [RelativeTime];
          }
        }]);

        return RtValueConverter;
      })();

      _export('RtValueConverter', RtValueConverter);
    }
  };
});