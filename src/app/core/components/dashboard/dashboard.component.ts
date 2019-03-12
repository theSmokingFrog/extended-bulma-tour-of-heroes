import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/core/services';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Character } from '@app/core/models';

@Component({
  selector:    'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:   ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public topCharacters: Character[] = [];
  public character$: Observable<Character[]>;
  private searchTerms = new Subject<string>();

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe(chars => this.topCharacters = chars.slice(1, 4));
    this.character$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), switchMap((term: string) => this.characterService.containsSearchByName(term)));
  }

  search(value: string) {
    this.searchTerms.next(value);
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.searchTerms.next('');
  }
}
