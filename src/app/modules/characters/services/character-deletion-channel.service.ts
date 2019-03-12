import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '@app/core/models';

@Injectable()
export class CharacterDeletionChannel {

  private characterDeletionSubject: BehaviorSubject<Character> = new BehaviorSubject(null);

  constructor() {
  }

  public propagate(character: Character) {
    this.characterDeletionSubject.next(character);
  }

  public clear() {
    this.characterDeletionSubject.next(null);
  }

  public observable(): Observable<Character> {
    return this.characterDeletionSubject.asObservable();
  }
}
