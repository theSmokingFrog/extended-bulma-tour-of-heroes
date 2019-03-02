import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesOverviewComponent } from './pages/heroes-overview/heroes-overview.component';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    HeroesOverviewComponent,
    HeroDetailComponent
  ], imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule {}
