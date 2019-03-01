import { Component, OnInit } from '@angular/core';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';

@Component({
  selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public topHeroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.topHeroes = heroes.slice(1, 5));
  }

}
