import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharactersOverviewComponent } from '@app/modules/characters/pages/characters-overview/characters-overview.component';
import { CharacterDetailComponent } from '@app/modules/characters/pages/character-detail/character-detail.component';
import { CharactersRoutingModule } from '@app/modules/characters/characters-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CharacterDeletionChannel } from '@app/modules/characters/services';
import { ConfirmCharacterDeletionModalComponent } from '@app/modules/characters/components/confirm-character-deletion-modal/confirm-character-deletion-modal.component';

@NgModule({
  declarations: [
    CharactersOverviewComponent,
    CharacterDetailComponent,
    ConfirmCharacterDeletionModalComponent
  ], imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule,
    TranslateModule.forChild()
  ], providers: [
    CharacterDeletionChannel
  ]
})
export class CharactersModule {}
