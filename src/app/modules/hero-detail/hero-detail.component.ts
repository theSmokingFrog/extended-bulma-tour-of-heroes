import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeroService } from '../../core/services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../core/models/hero.model';

@Component({
  selector: 'app-hero-detail', templateUrl: './hero-detail.component.html', styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
}
