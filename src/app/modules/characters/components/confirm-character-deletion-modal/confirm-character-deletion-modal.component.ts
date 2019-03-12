import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/core/services';
import { CharacterDeletionChannel } from '@app/modules/characters/services';
import { Character } from '@app/core/models';

@Component({
  selector:    'app-confirm-character-deletion-modal',
  templateUrl: './confirm-character-deletion-modal.component.html',
  styleUrls:   ['./confirm-character-deletion-modal.component.scss']
})
export class ConfirmCharacterDeletionModalComponent implements OnInit {

  private characterToDelete: Character;

  constructor(private heroService: CharacterService, private deletionChannel: CharacterDeletionChannel) {
  }

  ngOnInit() {
    this.deletionChannel.observable().subscribe({
      next: hero => this.resolve(hero)
    });
  }

  private resolve(character: Character) {
    this.characterToDelete = character;
  }

  public confirm() {
    this.heroService.deleteCharacter(this.characterToDelete).subscribe({
      complete: () => this.reset()
    });
  }

  public reset() {
    this.deletionChannel.clear();
  }

  public get deletionTranslateParams() {
    return {
      heroName: this.characterToDelete.name,
      heroId:   this.characterToDelete.id
    };
  }
}
