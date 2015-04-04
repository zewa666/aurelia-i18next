System.register(["./i18n"], function (_export) {
  var I18N;

  _export("install", install);

  function install(aurelia) {
    aurelia.globalizeResources("./t");
    aurelia.globalizeResources("./nf");
    aurelia.globalizeResources("./df");
    aurelia.container.registerInstance(I18N, new I18N());
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