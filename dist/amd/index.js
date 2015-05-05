define(['exports', './i18n', './relativeTime'], function (exports, _i18n, _relativeTime) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  Object.defineProperty(exports, 'I18N', {
    enumerable: true,
    get: function get() {
      return _i18n.I18N;
    }
  });
  Object.defineProperty(exports, 'RelativeTime', {
    enumerable: true,
    get: function get() {
      return _relativeTime.RelativeTime;
    }
  });

  function configure(aurelia, cb) {
    if (cb === undefined || typeof cb !== 'function') {
      throw 'You need to provide a callback method to properly configure the library';
    }

    aurelia.globalizeResources('./t');
    aurelia.globalizeResources('./nf');
    aurelia.globalizeResources('./df');
    aurelia.globalizeResources('./rt');
    var instance = new _i18n.I18N();
    aurelia.container.registerInstance(_i18n.I18N, instance);

    return cb(instance);
  }
});