import {I18N} from './i18n';
export {I18N} from './i18n';
export {RelativeTime} from './relativeTime';

export function install(aurelia, cb){
  aurelia.globalizeResources('./t');
  aurelia.globalizeResources('./nf');
  aurelia.globalizeResources('./df');
  aurelia.globalizeResources('./rt');
  var instance = new I18N();
  aurelia.container.registerInstance(I18N, instance);

  cb(instance);
}
