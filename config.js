System.config({
  "paths": {
    "*": "*.js",
    "aurelia-i18next/*": "dist/system/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "Intl.js": "github:andyearnshaw/Intl.js@0.1.4",
    "i18next": "github:i18next/i18next@1.8.0"
  }
});

