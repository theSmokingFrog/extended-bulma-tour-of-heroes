import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/core/models';
import { HeroService } from '@app/core/services';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public topHeroes: Hero[] = [];
  private searchTerms = new Subject<string>();
  private heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.topHeroes = heroes.slice(1, 5));
    this.heroes$ = this.searchTerms.pipe(// wait 300ms after each keystroke before considering the term
      debounceTime(300), distinctUntilChanged(), switchMap((term: string) => this.heroService.containsSearchByName(term)));
  }

  search(value: string) {
    this.searchTerms.next(value);
  }
}
