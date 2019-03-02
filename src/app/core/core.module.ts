import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '@app/core/components/dashboard/dashboard.component';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { MessagesComponent } from '@app/core/components/messages/messages.component';
import { HttpHeaderInterceptor } from '@app/core/interceptors';

const components = [
  DashboardComponent,
  MessagesComponent,
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ], declarations: [
    ...components
  ], exports: [
    ...components
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true
    }
  ]
})
export class CoreModule {}
