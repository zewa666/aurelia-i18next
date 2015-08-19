'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _I18N = require('./i18n');

var _EventAggregator = require('aurelia-event-aggregator');

var _ViewResources = require('aurelia-templating');

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
Object.defineProperty(exports, 'TCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _TValueConverter.TCustomAttribute;
  }
});

var _BaseI18N = require('./base-i18n');

Object.defineProperty(exports, 'BaseI18N', {
  enumerable: true,
  get: function get() {
    return _BaseI18N.BaseI18N;
  }
});
Object.defineProperty(exports, 'EventAggregator', {
  enumerable: true,
  get: function get() {
    return _EventAggregator.EventAggregator;
  }
});

function configure(frameworkConfig, cb) {
  if (cb === undefined || typeof cb !== 'function') {
    throw 'You need to provide a callback method to properly configure the library';
  }

  frameworkConfig.globalResources('./t');
  frameworkConfig.globalResources('./nf');
  frameworkConfig.globalResources('./df');
  frameworkConfig.globalResources('./rt');
  var instance = new _I18N.I18N(frameworkConfig.container.get(_EventAggregator.EventAggregator));
  frameworkConfig.container.registerInstance(_I18N.I18N, instance);

  var ret = cb(instance);

  frameworkConfig.postTask(function () {
    var resources = frameworkConfig.container.get(_ViewResources.ViewResources);
    var htmlBehaviorResource = resources.getAttribute('t');

    instance.i18next.options.attributes.forEach(function (alias) {
      return resources.registerAttribute(alias, htmlBehaviorResource, 't');
    });
  });

  return ret;
}