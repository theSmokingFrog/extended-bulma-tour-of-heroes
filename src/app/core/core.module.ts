import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '@app/core/components/dashboard/dashboard.component';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { HttpHeaderInterceptor } from '@app/core/interceptors';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  DashboardComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports:      [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    ...components
  ],
  exports:      [
    ...components
  ],
  providers:    [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi:    true
    }
  ]
})
export class CoreModule {}
