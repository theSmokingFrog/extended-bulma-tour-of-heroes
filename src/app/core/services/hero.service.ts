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
    return this.http.get(`${this.uriPrefix}`).pipe(tap(() => this.log('HeroService: fetched heroes')), map(data => data as Hero[]));
  }

  public getHero(id: number): Observable<Hero> {
    return this.http.get(`${this.uriPrefix}/${id}`)
               .pipe(tap(() => this.log(`HeroService: fetched hero id=${id}`)), map(data => data as Hero));
  }

  private log(message: string): void {
    this.messageService.add(message);
  }
}
