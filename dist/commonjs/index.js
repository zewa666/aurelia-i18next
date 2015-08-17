'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _I18N = require('./i18n');

var _EventAggregator = require('aurelia-event-aggregator');

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

var _DfValueConverter = require('./df');

Object.defineProperty(exports, 'DfValueConverter', {
  enumerable: true,
  get: function get() {
    return _DfValueConverter.DfValueConverter;
  }
});

var _NfValueConverter = require('./nf');

Object.defineProperty(exports, 'NfValueConverter', {
  enumerable: true,
  get: function get() {
    return _NfValueConverter.NfValueConverter;
  }
});

var _RtValueConverter = require('./rt');

Object.defineProperty(exports, 'RtValueConverter', {
  enumerable: true,
  get: function get() {
    return _RtValueConverter.RtValueConverter;
  }
});

var _TValueConverter = require('./t');

Object.defineProperty(exports, 'TValueConverter', {
  enumerable: true,
  get: function get() {
    return _TValueConverter.TValueConverter;
  }
});

function configure(config, cb) {
  if (cb === undefined || typeof cb !== 'function') {
    throw 'You need to provide a callback method to properly configure the library';
  }

  config.globalResources('./t');
  config.globalResources('./nf');
  config.globalResources('./df');
  config.globalResources('./rt');
  var instance = new _I18N.I18N(config.container.get(_EventAggregator.EventAggregator));
  config.container.registerInstance(_I18N.I18N, instance);

  return cb(instance);
}