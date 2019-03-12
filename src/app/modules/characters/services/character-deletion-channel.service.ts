import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '@app/core/models';

@Injectable()
export class CharacterDeletionChannel {

  private heroDeletionSubject: BehaviorSubject<Character> = new BehaviorSubject(null);

  constructor() {
  }

  public propagate(character: Character) {
    this.heroDeletionSubject.next(character);
  }

  public clear() {
    this.heroDeletionSubject.next(null);
  }

  public observable(): Observable<Character> {
    return this.heroDeletionSubject.asObservable();
  }


}
