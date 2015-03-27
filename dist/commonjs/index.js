"use strict";

exports.install = install;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = require("./i18n");

var I18N = _i18n.I18N;
exports.I18N = _i18n.I18N;

function install(aurelia) {
  aurelia.globalizeResources("./t");
  aurelia.container.registerInstance(I18N, new I18N());
}