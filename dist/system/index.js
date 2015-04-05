System.register(["./i18n"], function (_export) {
  var I18N;

  _export("install", install);

  function install(aurelia, cb) {
    aurelia.globalizeResources("./t");
    aurelia.globalizeResources("./nf");
    aurelia.globalizeResources("./df");
    var instance = new I18N();
    aurelia.container.registerInstance(I18N, instance);

    cb(instance);
  }

  return {
    setters: [function (_i18n) {
      I18N = _i18n.I18N;

      _export("I18N", _i18n.I18N);
    }],
    execute: function () {
      "use strict";
    }
  };
});