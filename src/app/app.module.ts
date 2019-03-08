import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { assetsTranslateLoaderFactory, configureTranslator, DisplayMissingKeyHandler } from '@app/app.translation';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { AppToastComponent } from '@app/app.toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations:    [
    AppComponent,
    AppToastComponent
  ],
  entryComponents: [
    AppToastComponent
  ],
  imports:         [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader:                    {
        provide:    TranslateLoader,
        useFactory: assetsTranslateLoaderFactory,
        deps:       [HttpClient]
      },
      missingTranslationHandler: {
        provide:  MissingTranslationHandler,
        useClass: DisplayMissingKeyHandler
      }
    }),
    ToastrModule.forRoot({
      timeOut:        4000,
      autoDismiss:    true,
      toastComponent: AppToastComponent,
      iconClasses:    {
        error:   'is-danger',
        warning: 'is-warning',
        info:    'is-info',
        success: 'is-success'
      }
    }),
    ToastNoAnimationModule
  ],
  providers:       [],
  bootstrap:       [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    configureTranslator(translate);
  }
}
