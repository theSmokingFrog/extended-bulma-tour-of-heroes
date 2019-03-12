import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/core/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:       '',
    redirectTo: 'dashboard',
    pathMatch:  'full'
  },
  {
    path:      'dashboard',
    component: DashboardComponent
  },
  {
    path:         'characters',
    loadChildren: './modules/characters/characters.module#CharactersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
