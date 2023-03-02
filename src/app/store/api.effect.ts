import { Injectable, inject } from '@angular/core';
import { ApiService } from '../service/api-service.service';
import { EpisodeActions, CharacterActions } from './api.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { Character } from '../interfaces';

@Injectable()
export class ApiEffects {
  private actions$ = inject(Actions);
  private apiService = inject(ApiService);

  readonly loadEpisode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EpisodeActions.getEpisodes),
      mergeMap(() =>
        this.apiService.getAllEpisodes().pipe(
          map((data) => EpisodeActions.setEpisodes({ episodes: data.results })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly setEpisode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EpisodeActions.getEpisode),
      mergeMap(({ id }) =>
        this.apiService.getEpisode(id).pipe(
          map((data) => {
            return EpisodeActions.setEpisode(data);
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly setCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharacterActions.getCharacters),
      mergeMap(({ url }) =>
        this.apiService.getCharacter(url).pipe(
          map((response: Character) => {
            return CharacterActions.addCharacters({ character: response });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
