import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly uriPrefix: string = '/api/heroes';

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get(`${this.uriPrefix}`).pipe(tap(() => this.log('HeroService: Fetched Heroes')), map(data => data as Hero[]));
  }

  public getHero(id: number): Observable<Hero> {
    return this.http.get(`${this.uriPrefix}/${id}`)
               .pipe(tap(() => this.log(`HeroService: Fetched Hero - ID=${id}`)), map(data => data as Hero));
  }

  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${this.uriPrefix}/${hero.id}`, hero).pipe(tap(() => this.log(`HeroService: Updated Hero - ID=${hero.id}`)));
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.uriPrefix}`, hero)
               .pipe(tap((newHero: Hero) => this.log(`HeroService: Added Hero w/ ID=${newHero.id}`)));
  }

  public deleteHero(toDelete: Hero | number): Observable<Hero> {
    const id = typeof toDelete === 'number' ? toDelete : toDelete.id;
    return this.http.delete<Hero>(`${this.uriPrefix}/${id}`).pipe(tap(() => this.log(`HeroService: Deleted Hero - ID=${id}`)));
  }

  public containsSearchByName(name: string): Observable<Hero[]> {
    return this.http.get(`${this.uriPrefix}?name_like=${name}`)
               .pipe(tap(() => this.log(`HeroService: Searching for Heroes with '${name}'`)), map(data => data as Hero[]));
  }

  private log(message: string): void {
    this.messageService.add(message);
  }
}
