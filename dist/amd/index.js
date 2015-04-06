define(["exports", "./i18n", "./relativeTime"], function (exports, _i18n, _relativeTime) {
  "use strict";

  exports.install = install;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var I18N = _i18n.I18N;
  exports.I18N = _i18n.I18N;
  exports.RelativeTime = _relativeTime.RelativeTime;

  function install(aurelia, cb) {
    aurelia.globalizeResources("./t");
    aurelia.globalizeResources("./nf");
    aurelia.globalizeResources("./df");
    var instance = new I18N();
    aurelia.container.registerInstance(I18N, instance);

    cb(instance);
  }
});