import { createReducer, on } from '@ngrx/store';
import {
  setEpisode,
  setCharacters,
  setEpisodes,
  clearCharacters,
  getEpisode,
} from './api.actions';
import { Character, Episode } from '../interfaces';

let initStateAll: Array<Episode> = [];
let initStateEpisode = {} as Episode;
let initStateCharacters: Array<Character> = [];

export const apiEpisodes = createReducer(
  initStateAll,
  on(setEpisodes, (state, { episodes }) => {
    return [...episodes];
  })
);

export const apiEpisode = createReducer(
  initStateEpisode,
  on(getEpisode, () => initStateEpisode),
  on(setEpisode, (state, episode) => episode)
);

export const apiCharacters = createReducer(
  initStateCharacters,
  on(clearCharacters, () => initStateCharacters),
  on(setCharacters, (state, { c }) => {
    return [...state, c];
  })
);
