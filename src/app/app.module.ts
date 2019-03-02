import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { assetsTranslateLoaderFactory, configureTranslator, DisplayMissingKeyHandler } from '@app/app.translation';

@NgModule({
  declarations: [
    AppComponent
  ], imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, useFactory: assetsTranslateLoaderFactory, deps: [HttpClient]
      }, missingTranslationHandler: {
        provide: MissingTranslationHandler, useClass: DisplayMissingKeyHandler
      }
    })
  ], providers: [], bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    configureTranslator(translate);
  }
}
