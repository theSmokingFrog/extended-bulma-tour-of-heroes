import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesOverviewComponent } from '@app/modules/heroes/pages/heroes-overview/heroes-overview.component';
import { HeroDetailComponent } from '@app/modules/heroes/pages/hero-detail/hero-detail.component';
import { HeroesRoutingModule } from '@app/modules/heroes/heroes-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmHeroDeletionModalComponent } from './components/confirm-hero-deletion-modal/confirm-hero-deletion-modal.component';

@NgModule({
  declarations: [
    HeroesOverviewComponent,
    HeroDetailComponent,
    ConfirmHeroDeletionModalComponent
  ],
  imports:      [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    TranslateModule.forChild()
  ]
})
export class HeroesModule {}
