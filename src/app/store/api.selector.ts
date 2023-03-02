import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Character, IEpisode } from '../interfaces';

export const selectEpisodesState = createFeatureSelector<IEpisode>('episode');
export const selectAllEpisodes = createSelector(
  selectEpisodesState,
  (state) => state.all
);

export const selectEpisode = createSelector(
  selectEpisodesState,
  (state) => state.selected
);
export const selectCharacterState =
  createFeatureSelector<Array<Character>>('character');
export const selectAllCharacters = createSelector(
  selectCharacterState,
  (state) => state
);
