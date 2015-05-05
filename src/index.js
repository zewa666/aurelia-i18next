import {I18N} from './i18n';
export {I18N} from './i18n';
export {RelativeTime} from './relativeTime';

export function configure(aurelia, cb){
  if(cb === undefined || typeof cb !== 'function') {
    throw 'You need to provide a callback method to properly configure the library';
  }

  aurelia.globalizeResources('./t');
  aurelia.globalizeResources('./nf');
  aurelia.globalizeResources('./df');
  aurelia.globalizeResources('./rt');
  var instance = new I18N();
  aurelia.container.registerInstance(I18N, instance);

  return cb(instance);
}
