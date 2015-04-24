'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var extend = function extend(destination, source) {
  for (var property in source) destination[property] = source[property];
  return destination;
};

exports.extend = extend;
var assignObjectToKeys = (function (_assignObjectToKeys) {
  function assignObjectToKeys(_x, _x2) {
    return _assignObjectToKeys.apply(this, arguments);
  }

  assignObjectToKeys.toString = function () {
    return _assignObjectToKeys.toString();
  };

  return assignObjectToKeys;
})(function (root, obj) {
  if (obj === undefined) return undefined;

  var opts = {};

  Object.keys(obj).map(function (key) {
    if (typeof obj[key] === 'object') {
      extend(opts, assignObjectToKeys(key, obj[key]));
    } else {
      opts[root !== '' ? root + '.' + key : key] = obj[key];
    }
  });

  return opts;
});
exports.assignObjectToKeys = assignObjectToKeys;