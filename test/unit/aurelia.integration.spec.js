import {install} from '../../src/index';


describe('testing aurelia install routine', () => {

  var aurelia = {
    globalizeResources: () => {

    },
    container: {
      registerInstance: (type, instance) => {

      }
    }
  };

  it('should export install function', () => {
    expect(typeof install).toBe('function');
  });

  it('should accept a setup callback passing back the instance', (done) => {


    var cb = (instance) => {
      expect(typeof instance).toBe('object');
      done();
    };

    install(aurelia, cb);
  });

  it('should throw custom error message if no callback is provided', () => {
    expect(() => { install(aurelia); }).toThrow('You need to provide a callback method to properly configure the library');
  });
});
