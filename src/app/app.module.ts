import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ], imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ], providers: [], bootstrap: [AppComponent]
})
export class AppModule {}
