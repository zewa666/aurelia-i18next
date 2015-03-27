import {I18N} from '../../src/i18n';

describe('testing i18n translations', () => {

  var sut;

  beforeEach( () => {
    var resources = {
      en: {
        translation: {
          "score": "Score: __score__",
          "lives": "__count__ life remaining",
          "lives_plural": "__count__ lives remaining",
          "lives_indefinite": "a life remaining",
          "lives_plural_indefinite": "some lifes remaining",
          "friend": "A friend",
          "friend_male": "A boyfriend",
          "friend_female": "A girlfriend"
        }
      },
      de: {
        translation: {
          "score": "Punktestand: __score__",
          "lives": "__count__ Lebenspunkt übrig",
          "lives_plural": "__count__ Lebenspunkte übrig",
          "lives_indefinite": "ein Lebenspunkt übrig",
          "lives_plural_indefinite": "einige Lebenspunkte übrig",
          "friend": "Ein Freund",
          "friend_male": "Ein Freund",
          "friend_female": "Eine Freundin"
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

  it('should translate a simple key without options', () => {
    expect(sut.tr('friend', { count: 0 })).toEqual('A friend');
  });

  it('should properly switch locales', (done) => {
    expect(sut.getLocale()).toBe('en');

    sut.setLocale('de').then( () => {
      expect(sut.getLocale()).toBe('de');
      expect(sut.tr('friend', { count: 0 })).toEqual('Ein Freund');
      done();
    });
  });

  it('should pass on provided options', () => {
    expect(sut.i18next.options.debug).toBe(false);
    expect(sut.i18next.options.sendMissing).toBe(false);
    expect(sut.i18next.options.fallbackLng).toEqual(['en']);
  });
});
