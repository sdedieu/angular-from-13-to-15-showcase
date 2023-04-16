import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, scan, shareReplay, map, skipWhile, switchMap, tap } from 'rxjs';
import { Planet, PlanetDto } from '../models/planet';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponseWrapper } from '../models/api-response-wrapper';
import { PlanetMapper } from '../utils/mapper/planet-mapper';

const LOCAL_STORAGE_PLANETS_KEY = 'LOCAL_STORAGE_PLANETS_KEY'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) { }

  getAll(): Observable<Planet[]> {
    const url$ = new BehaviorSubject<string>(`https://swapi.dev/api/planets/?page=1`);
    const stored = this.localStorageService.getItem<Planet[]>(LOCAL_STORAGE_PLANETS_KEY);
    const httpReponse$ = url$.asObservable()
      .pipe(
        switchMap(url => this.http.get<ApiResponseWrapper<PlanetDto>>(url)),
        tap({
          next: response => {
            if (response.next)
              url$.next(response.next)
            else
              url$.complete()
          },
          error: err => url$.complete()
        }),
        scan((prev, curr) => ({
          planets: prev.planets.concat(curr.results.map(PlanetMapper.fromDto)),
          done: !!curr.next
        }), { planets: [] as Planet[], done: false }),
        skipWhile(res => !res.done),
        map(res => res.planets),
        tap(planets => this.localStorageService.setItem(LOCAL_STORAGE_PLANETS_KEY, planets))
      );
    const observable = stored ? of(stored) : httpReponse$;
    return observable.pipe(
      shareReplay(1)
    );
  }

  getOne(name: string): Observable<Planet | undefined> {
    const url = `https://swapi.dev/api/planets/?search=${name}`;
    const stored = this.localStorageService.getItem<Planet[]>(LOCAL_STORAGE_PLANETS_KEY);
    const httpReponse$ = this.http.get<ApiResponseWrapper<PlanetDto>>(url)
      .pipe(
        map(res => res.results ? PlanetMapper.fromDto(res.results[0]) : undefined),
      );
    const observable = stored ? of(stored.find(p => p.name === name)) : httpReponse$;
    return observable;
  }
}
