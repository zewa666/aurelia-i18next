"use strict";

exports.install = install;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = require("./i18n");

var I18N = _i18n.I18N;
exports.I18N = _i18n.I18N;
exports.RelativeTime = require("./relativeTime").RelativeTime;

function install(aurelia, cb) {
  if (cb === undefined || typeof cb !== "function") {
    throw "You need to provide a callback method to properly configure the library";
  }

  aurelia.globalizeResources("./t");
  aurelia.globalizeResources("./nf");
  aurelia.globalizeResources("./df");
  aurelia.globalizeResources("./rt");
  var instance = new I18N();
  aurelia.container.registerInstance(I18N, instance);

  return cb(instance);
}