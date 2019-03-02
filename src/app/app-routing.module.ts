import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', loadChildren: './modules/heroes/heroes.module#HeroesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {}
