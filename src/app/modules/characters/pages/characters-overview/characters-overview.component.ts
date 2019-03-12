import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/core/services';
import { TranslateService } from '@ngx-translate/core';
import { CharacterDeletionChannel } from '@app/modules/characters/services';
import { Character } from '@app/core/models';
import * as _ from 'lodash';

@Component({
  templateUrl: './characters-overview.component.html',
  styleUrls:   ['./characters-overview.component.scss']
})
export class CharactersOverviewComponent implements OnInit {

  public selectedCharacter: Character;
  public charactersByAlignment: Map<string, Character[]> = new Map();

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
        .subscribe(characters => this.charactersByAlignment = this.mapByAlignment(characters));
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

  private mapByAlignment(characters: Character[]): Map<string, Character[]> {
    const mappedChars: Map<string, Character[]> = new Map();
    characters.forEach(character => {
      let listOfCharacters = mappedChars.get(character.alignment);
      if (!listOfCharacters) {
        listOfCharacters = [];
      }
      listOfCharacters.push(character);
      mappedChars.set(character.alignment, listOfCharacters);
    });
    return mappedChars;
  }

  private get characters(): Character[] {
    return _.flatten(Array.from(this.charactersByAlignment.values()));
  }
}
