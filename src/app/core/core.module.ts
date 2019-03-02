import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpHeaderInterceptor } from './interceptors/http-header.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ], declarations: [
    DashboardComponent,
    MessagesComponent,
    HeaderComponent
  ], exports: [
    DashboardComponent,
    MessagesComponent,
    HeaderComponent
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true
    }
  ]
})
export class CoreModule {}
