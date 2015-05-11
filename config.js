System.config({
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "aurelia-i18next/*": "dist\\system/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "Intl.js": "github:andyearnshaw/Intl.js@0.1.4",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.4.0",
    "i18next": "github:i18next/i18next@1.8.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88"
  }
});

