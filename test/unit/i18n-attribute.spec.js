import {TCustomAttribute} from '../../src/t';
import {Container} from 'aurelia-dependency-injection';
import {BehaviorInstance} from 'aurelia-templating';

describe('testing i18n attributes', () => {
  var container;

  beforeEach(() => {
    container = new Container().makeGlobal();
    container.registerInstance(Element, '<div>');
  });


  it('should raise value change on simple custom attribute', done => {
    var i18nAttribute = BehaviorInstance.createForUnitTest(TCustomAttribute);
    spyOn(i18nAttribute, 'valueChanged');

    i18nAttribute.value = 'foo';

    setTimeout(() => {
      expect(att.valueChanged).toHaveBeenCalledWith('foo', undefined);
      done();
    });
  });
});
