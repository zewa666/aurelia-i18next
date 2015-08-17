import {I18N} from './i18n';
import {EventAggregator} from 'aurelia-event-aggregator';

export {I18N} from './i18n';
export {RelativeTime} from './relativeTime';
export {DfValueConverter} from './df';
export {NfValueConverter} from './nf';
export {RtValueConverter} from './rt';
export {TValueConverter} from './t';

export function configure(config, cb){
  if(cb === undefined || typeof cb !== 'function') {
    throw 'You need to provide a callback method to properly configure the library';
  }

  config.globalResources('./t');
  config.globalResources('./nf');
  config.globalResources('./df');
  config.globalResources('./rt');
  var instance = new I18N(config.container.get(EventAggregator));
  config.container.registerInstance(I18N, instance);

  return cb(instance);
}
