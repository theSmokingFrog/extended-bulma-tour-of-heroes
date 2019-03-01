import { Component, OnInit } from '@angular/core';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';

@Component({
  selector: 'app-heroes', templateUrl: './heroes.component.html', styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[] = [];
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
