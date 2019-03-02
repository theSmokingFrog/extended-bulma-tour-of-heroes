export class Language {
  public static readonly ENGLISH = new Language('en');
  public static readonly GERMAN = new Language('de');

  public alpha2Code: string;

  public constructor(pAlpha2Code: string) {
    this.alpha2Code = pAlpha2Code;
  }

  public static keys(): Array<Language> {
    return [
      Language.ENGLISH,
      Language.GERMAN
    ];
  }

  public static getByAlpha2Code(code: string): Language {
    return Language.keys().find(lang => lang.alpha2Code.indexOf(code) > -1);
  }

  public get translationKey(): string {
    return `languages.${this.alpha2Code}`;
  }
}
