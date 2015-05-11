System.register(['./i18n', 'aurelia-event-aggregator', './relativeTime'], function (_export) {
  var I18N, EventAggregator;

  _export('configure', configure);

  function configure(aurelia, cb) {
    if (cb === undefined || typeof cb !== 'function') {
      throw 'You need to provide a callback method to properly configure the library';
    }

    aurelia.globalizeResources('./t');
    aurelia.globalizeResources('./nf');
    aurelia.globalizeResources('./df');
    aurelia.globalizeResources('./rt');
    var instance = new I18N(aurelia.container.get(EventAggregator));
    aurelia.container.registerInstance(I18N, instance);

    return cb(instance);
  }

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;

      _export('I18N', _i18n.I18N);
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_relativeTime) {
      _export('RelativeTime', _relativeTime.RelativeTime);
    }],
    execute: function () {
      'use strict';
    }
  };
});