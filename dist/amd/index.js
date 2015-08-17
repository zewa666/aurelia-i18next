define(['exports', './i18n', 'aurelia-event-aggregator', './relativeTime', './df', './nf', './rt', './t'], function (exports, _i18n, _aureliaEventAggregator, _relativeTime, _df, _nf, _rt, _t) {
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
  Object.defineProperty(exports, 'DfValueConverter', {
    enumerable: true,
    get: function get() {
      return _df.DfValueConverter;
    }
  });
  Object.defineProperty(exports, 'NfValueConverter', {
    enumerable: true,
    get: function get() {
      return _nf.NfValueConverter;
    }
  });
  Object.defineProperty(exports, 'RtValueConverter', {
    enumerable: true,
    get: function get() {
      return _rt.RtValueConverter;
    }
  });
  Object.defineProperty(exports, 'TValueConverter', {
    enumerable: true,
    get: function get() {
      return _t.TValueConverter;
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
    var instance = new _i18n.I18N(config.container.get(_aureliaEventAggregator.EventAggregator));
    config.container.registerInstance(_i18n.I18N, instance);

    return cb(instance);
  }
});