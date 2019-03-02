import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesOverviewComponent } from '@app/modules/heroes/pages/heroes-overview/heroes-overview.component';
import { HeroDetailComponent } from '@app/modules/heroes/pages/hero-detail/hero-detail.component';
import { HeroesRoutingModule } from '@app/modules/heroes/heroes-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeroesOverviewComponent,
    HeroDetailComponent
  ], imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    TranslateModule.forChild()
  ]
})
export class HeroesModule {}
