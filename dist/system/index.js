System.register(["./i18n", "./relativeTime"], function (_export) {
  var I18N;

  _export("install", install);

  function install(aurelia, cb) {
    aurelia.globalizeResources("./t");
    aurelia.globalizeResources("./nf");
    aurelia.globalizeResources("./df");
    aurelia.globalizeResources("./rt");
    var instance = new I18N();
    aurelia.container.registerInstance(I18N, instance);

    cb(instance);
  }

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;

      _export("I18N", _i18n.I18N);
    }, function (_relativeTime) {
      _export("RelativeTime", _relativeTime.RelativeTime);
    }],
    execute: function () {
      "use strict";
    }
  };
});