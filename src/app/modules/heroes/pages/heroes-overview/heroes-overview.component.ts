import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/core/services';
import { TranslateService } from '@ngx-translate/core';
import { CharacterDeletionChannel } from '@app/modules/heroes/services';
import { Character } from '@app/core/models';

@Component({
  templateUrl: './heroes-overview.component.html', styleUrls: ['./heroes-overview.component.scss']
})
export class HeroesOverviewComponent implements OnInit {

  public characters: Character[] = [];
  public selectedCharacter: Character;

  public constructor(private heroService: CharacterService, private translate: TranslateService, private deletionChannel: CharacterDeletionChannel) {
  }

  public ngOnInit() {
    this.deletionChannel.observable().subscribe({
      next: hero => {
        if (!hero) {
          this.loadData();
        }
      }
    });
  }

  private loadData() {
    this.heroService.getCharacters().subscribe(heroes => this.characters = heroes);
  }

  public onSelect(hero: Character): void {
    this.selectedCharacter = hero;
  }

  triggerDeletion(hero: Character) {
    this.deletionChannel.propagate(hero);
  }

  public addCharacter(heroInput: HTMLInputElement) {
    const name = heroInput.value.trim();
    if (name) {
      this.heroService.addCharacter({name} as Character).subscribe({
        complete: () => this.loadData()
      });
    }
  }

  public get viewButtonTitle(): string {
    return this.translate.instant('heroes.overview.actions.view', {value: this.selectedCharacter.name});
  }
}
