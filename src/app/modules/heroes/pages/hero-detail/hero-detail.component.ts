import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '@app/core/models';
import { HeroService, MessageService } from '@app/core/services';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls:   ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location, private messageService: MessageService, private router: Router) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

  doSave() {
    this.heroService.updateHero(this.hero).subscribe({
      complete: () => this.router.navigate(['/heroes']),
      error:    err => this.messageService.add(err.message)
    });
  }
}
