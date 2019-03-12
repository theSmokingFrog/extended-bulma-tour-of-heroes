import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/core/services';
import { TranslateService } from '@ngx-translate/core';
import { CharacterDeletionChannel } from '@app/modules/characters/services';
import { Character } from '@app/core/models';

@Component({
  templateUrl: './characters-overview.component.html',
  styleUrls:   ['./characters-overview.component.scss']
})
export class CharactersOverviewComponent implements OnInit {

  public characters: Character[] = [];
  public selectedCharacter: Character;

  public constructor(private characterService: CharacterService, private translate: TranslateService, private deletionChannel: CharacterDeletionChannel) {
  }

  public ngOnInit() {
    this.deletionChannel.observable().subscribe({
      next: character => {
        if (!character) {
          this.loadData();
        }
      }
    });
  }

  private loadData() {
    this.characterService.getCharacters()
        .subscribe(characters => this.characters = characters as Character[]);
  }

  public onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  triggerDeletion(character: Character) {
    this.deletionChannel.propagate(character);
  }

  // TODO: Make this a modal with a form
  public addCharacter(characterInput: HTMLInputElement) {
    const name = characterInput.value.trim();
    if (name) {
      this.characterService.addCharacter({name} as Character).subscribe({
        complete: () => this.loadData()
      });
    }
  }

  public get buttonTitleTranslateParams() {
    return {
      value: this.selectedCharacter.displayname
    };
  }
}
