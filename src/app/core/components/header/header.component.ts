import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '@app/core/models';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:   ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public languageDropdownActive: boolean = false;

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.languageDropdownActive = !this.languageDropdownActive;
  }

  getLangTranslation(currentLang: string) {
    return this.translate.instant(Language.getByAlpha2Code(currentLang).translationKey);
  }

  public get languages(): Language[] {
    return Language.keys();
  }

  useLanguage(lang: Language) {
    this.translate.use(lang.alpha2Code);
    this.languageDropdownActive = false;
  }
}
