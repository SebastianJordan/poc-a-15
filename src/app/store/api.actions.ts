import { createAction, props } from '@ngrx/store';
import { Character, Episode } from '../interfaces';

export const getEpisodes = createAction('[Get episodes]');
export const setEpisodes = createAction(
  '[Set episodes]',
  props<{ episodes: Array<Episode> }>()
);

export const getEpisode = createAction(
  '[Get episode]',
  props<{ id: string }>()
);
export const setEpisode = createAction('[Set episode]', props<Episode>());

export const getCharacters = createAction(
  '[Get Characters]',
  props<{ url: string }>()
);

export const setCharacters = createAction(
  '[Add Characters]',
  props<{ c: Character }>()
);

export const clearCharacters = createAction('[clear Characters]');
export const loadedCharacters = createAction('[Loaded Characters]');
