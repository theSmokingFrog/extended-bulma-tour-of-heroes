import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Character } from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly URI_PREFIX: string = '/api/characters';

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  public getCharacters(): Observable<Character[]> {
    return this.http.get(`${this.URI_PREFIX}`).pipe(tap(() => this.log('CharacterService: Fetched Characters')), map(data => data as Character[]));
  }

  public getCharacter(id: number): Observable<Character> {
    return this.http.get(`${this.URI_PREFIX}/${id}`)
               .pipe(tap(() => this.log(`CharacterService: Fetched Character - ID=${id}`)), map(data => data as Character));
  }

  public updateCharacter(character: Character): Observable<any> {
    return this.http.put(`${this.URI_PREFIX}/${character.id}`, character).pipe(tap(() => this.log(`CharacterService: Updated Character - ID=${character.id}`)));
  }

  public addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(`${this.URI_PREFIX}`, character)
               .pipe(tap((newCharacter: Character) => this.log(`CharacterService: Added Character w/ ID=${newCharacter.id}`)));
  }

  public deleteCharacter(toDelete: Character | number): Observable<Character> {
    const id = typeof toDelete === 'number' ? toDelete : toDelete.id;
    return this.http.delete<Character>(`${this.URI_PREFIX}/${id}`).pipe(tap(() => this.log(`CharacterService: Deleted Character - ID=${id}`)));
  }

  public containsSearchByName(name: string): Observable<Character[]> {
    return this.http.get(`${this.URI_PREFIX}?name_like=${name}`)
               .pipe(tap(() => this.log(`CharacterService: Searching for Characters with '${name}'`)), map(data => data as Character[]));
  }

  private log(message: string): void {
    this.toastr.show(message);
  }
}
