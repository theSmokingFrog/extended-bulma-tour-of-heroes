import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesOverviewComponent } from '@app/modules/heroes/pages/heroes-overview/heroes-overview.component';
import { HeroDetailComponent } from '@app/modules/heroes/pages/hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', component: HeroesOverviewComponent},
  {path: ':id', component: HeroDetailComponent}
];

@NgModule({
  declarations: [], imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class HeroesRoutingModule {}