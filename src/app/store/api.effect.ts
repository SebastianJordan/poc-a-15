import { Injectable } from '@angular/core';
import { ApiService } from '../service/api-service.service';
import {
  getEpisode,
  getEpisodes,
  setEpisode,
  setCharacters,
  setEpisodes,
  getCharacters
} from './api.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { Character } from '../interfaces';

@Injectable()
export class ApiEffects {
  readonly loadEpisode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEpisodes),
      mergeMap(() =>
        this.apiService.getAllEpisodes().pipe(
          map((data) => setEpisodes({ episodes: data.results })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly setEpisode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEpisode),
      mergeMap(({ id }) =>
        this.apiService.getEpisode(id).pipe(
          map((data) => {
            return setEpisode(data);
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly setCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCharacters),
      mergeMap(({ url }) =>
        this.apiService.getCharacter(url).pipe(
          map((response: Character) => {
            return setCharacters({ c: response });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
