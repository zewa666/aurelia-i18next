System.config({
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "es7.decorators"
    ]
  },
  "paths": {
    "aurelia-i18next/*": "dist\\system/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "map": {
    "Intl.js": "github:andyearnshaw/Intl.js@0.1.4",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
    "aurelia-loader-default": "github:aurelia/loader-default@0.9.5",
    "babel": "npm:babel-core@5.4.4",
    "babel-runtime": "npm:babel-runtime@5.4.4",
    "core-js": "npm:core-js@0.9.18",
    "i18next": "github:i18next/i18next@1.10.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:aurelia/event-aggregator@0.7.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.4"
    },
    "github:aurelia/loader-default@0.9.5": {
      "aurelia-loader": "github:aurelia/loader@0.8.7",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3"
    },
    "github:aurelia/loader@0.8.7": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.3": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

