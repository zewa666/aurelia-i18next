import {install} from '../../src/index';


describe('testing aurelia install routine', () => {

  it('should export install function', () => {
    expect(typeof install).toBe('function');
  });

  it('should accept a setup callback passing back the instance', (done) => {
    var aurelia = {
      globalizeResources: () => {

      },
      container: {
        registerInstance: (type, instance) => {

        }
      }
    };

    var cb = (instance) => {
      expect(typeof instance).toBe('object');
      done();
    };

    install(aurelia, cb);
  });
});
