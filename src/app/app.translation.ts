import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { Language } from '@app/core/models';

export function assetsTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function configureTranslator(translate: TranslateService) {
  const availableLanguages = Language.keys().map(lang => lang.alpha2Code);

  translate.addLangs(availableLanguages);
  translate.setDefaultLang(availableLanguages[0]);
  translate.use(translate.getDefaultLang()).subscribe();
}

export class DisplayMissingKeyHandler implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams): string {
    return `_!${params.key}!_`;
  }
}
