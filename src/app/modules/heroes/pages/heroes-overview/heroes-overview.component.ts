import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/core/models';
import { HeroService } from '@app/core/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './heroes-overview.component.html',
  styleUrls:   ['./heroes-overview.component.scss']
})
export class HeroesOverviewComponent implements OnInit {

  public heroes: Hero[] = [];
  public selectedHero: Hero;
  public heroToDelete: Hero;

  public constructor(private heroService: HeroService, private translate: TranslateService) {
  }

  public ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  doConfirm(hero: Hero) {
    this.heroToDelete = hero;
  }

  public addHero(heroInput: HTMLInputElement) {
    const name = heroInput.value.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe({
      complete: () => this.loadData()
    });
  }

  public get viewButtonTitle(): string {
    return this.translate.instant('heroes.overview.actions.view', {value: this.selectedHero.name});
  }
}
