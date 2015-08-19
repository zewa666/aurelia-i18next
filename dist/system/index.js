System.register(['./i18n', 'aurelia-event-aggregator', './relativeTime', './df', './nf', './rt', './t', './base-i18n'], function (_export) {
  var I18N, EventAggregator;

  _export('configure', configure);

  function configure(config, cb) {
    if (cb === undefined || typeof cb !== 'function') {
      throw 'You need to provide a callback method to properly configure the library';
    }

    config.globalResources('./t');
    config.globalResources('./nf');
    config.globalResources('./df');
    config.globalResources('./rt');
    var instance = new I18N(config.container.get(EventAggregator));
    config.container.registerInstance(I18N, instance);

    return cb(instance);
  }

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;

      _export('I18N', _i18n.I18N);
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;

      _export('EventAggregator', _aureliaEventAggregator.EventAggregator);
    }, function (_relativeTime) {
      _export('RelativeTime', _relativeTime.RelativeTime);
    }, function (_df) {
      _export('DfValueConverter', _df.DfValueConverter);
    }, function (_nf) {
      _export('NfValueConverter', _nf.NfValueConverter);
    }, function (_rt) {
      _export('RtValueConverter', _rt.RtValueConverter);
    }, function (_t) {
      _export('TValueConverter', _t.TValueConverter);

      _export('TCustomAttribute', _t.TCustomAttribute);
    }, function (_baseI18n) {
      _export('BaseI18N', _baseI18n.BaseI18N);
    }],
    execute: function () {
      'use strict';
    }
  };
});