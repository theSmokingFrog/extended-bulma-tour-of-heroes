import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersOverviewComponent } from '@app/modules/characters/pages/characters-overview/characters-overview.component';
import { CharacterDetailComponent } from '@app/modules/characters/pages/character-detail/character-detail.component';

const routes: Routes = [
  {
    path:      '',
    component: CharactersOverviewComponent
  },
  {
    path:      ':id',
    component: CharacterDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports:      [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:      [RouterModule]
})
export class CharactersRoutingModule {}
