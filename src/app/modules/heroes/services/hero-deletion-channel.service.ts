import { Injectable } from '@angular/core';
import { Hero } from '@app/core/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HeroDeletionChannel {

  private heroDeletionSubject: BehaviorSubject<Hero> = new BehaviorSubject(null);

  constructor() {
  }

  public propagate(hero: Hero) {
    this.heroDeletionSubject.next(hero);
  }

  public clear() {
    this.heroDeletionSubject.next(null);
  }

  public observable(): Observable<Hero> {
    return this.heroDeletionSubject.asObservable();
  }


}
