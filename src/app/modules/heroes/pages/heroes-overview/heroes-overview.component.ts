import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/core/models';
import { HeroService } from '@app/core/services';
import { TranslateService } from '@ngx-translate/core';
import { HeroDeletionChannel } from '@app/modules/heroes/services/hero-deletion-channel.service';

@Component({
  templateUrl: './heroes-overview.component.html', styleUrls: ['./heroes-overview.component.scss']
})
export class HeroesOverviewComponent implements OnInit {

  public heroes: Hero[] = [];
  public selectedHero: Hero;

  public constructor(private heroService: HeroService, private translate: TranslateService, private deletionChannel: HeroDeletionChannel) {
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
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  triggerDeletion(hero: Hero) {
    this.deletionChannel.propagate(hero);
  }

  public addHero(heroInput: HTMLInputElement) {
    const name = heroInput.value.trim();
    if (name) {
      this.heroService.addHero({name} as Hero).subscribe({
        complete: () => this.loadData()
      });
    }
  }

  public get viewButtonTitle(): string {
    return this.translate.instant('heroes.overview.actions.view', {value: this.selectedHero.name});
  }
}
