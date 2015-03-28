import {I18N} from '../../src/i18n';

describe('numberformat tests', () => {

  var sut;

  beforeEach( () => {
    var resources = {
      en: {
        translation: {
          "lives": "__count__ life remaining",
          "lives_plural": "__count__ lives remaining",
          "lives_indefinite": "a life remaining",
          "lives_plural_indefinite": "some lives remaining",
        }
      }
    };

    sut = new I18N();
    sut.setup({
      resStore: resources,
      lng : 'en',
      getAsync : false,
      sendMissing : false,
      fallbackLng : 'en',
      debug : false
    });
  });

  it('should display number in the setup locale format by default', () => {
    var nf = sut.NumberFormat();
    var testNumber = 123456.789;

    expect(nf.format(testNumber)).toEqual('123,456.789');
  });

  it('should display number in the previously modified locale', (done) => {
    sut.setLocale('de').then( () => {
      var nf = sut.NumberFormat();
      var testNumber = 123456.789;

      expect(nf.format(testNumber)).toEqual('123.456,789');

      done();
    });
  });

  it('should display number as currency',() => {
    var nf = sut.NumberFormat('de', { style: 'currency', currency: 'EUR' });
    var testNumber = 123456.789;

    expect(nf.format(testNumber)).toBe('123.456,789 €');
  });

});
