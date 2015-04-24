'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.install = install;

var _I18N = require('./i18n');

Object.defineProperty(exports, 'I18N', {
  enumerable: true,
  get: function get() {
    return _I18N.I18N;
  }
});

var _RelativeTime = require('./relativeTime');

Object.defineProperty(exports, 'RelativeTime', {
  enumerable: true,
  get: function get() {
    return _RelativeTime.RelativeTime;
  }
});

function install(aurelia, cb) {
  if (cb === undefined || typeof cb !== 'function') {
    throw 'You need to provide a callback method to properly configure the library';
  }

  aurelia.globalizeResources('./t');
  aurelia.globalizeResources('./nf');
  aurelia.globalizeResources('./df');
  aurelia.globalizeResources('./rt');
  var instance = new _I18N.I18N();
  aurelia.container.registerInstance(_I18N.I18N, instance);

  return cb(instance);
}