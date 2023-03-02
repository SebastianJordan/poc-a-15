import { createFeature, createReducer, on } from '@ngrx/store';
import { CharacterActions, EpisodeActions } from './api.actions';
import { Character, Episode, IEpisode } from '../interfaces';
let initStateEpisode: IEpisode = {
  all: [],
  selected: {} as Episode,
};
let initStateCharacters: Array<Character> = [];

export const episodeFeature = createFeature({
  name: 'episode',
  reducer: createReducer(
    initStateEpisode,
    on(EpisodeActions.setEpisodes, (state, action) => {
      return {
        ...state,
        all: action.episodes,
      };
    }),
    on(EpisodeActions.getEpisode, () => initStateEpisode),
    on(EpisodeActions.setEpisode, (state, action) => {
      return { ...state, selected: action };
    })
  ),
});

export const characterFeature = createFeature({
  name: 'character',
  reducer: createReducer(
    initStateCharacters,
    on(CharacterActions.clearCharacters, () => initStateCharacters),
    on(CharacterActions.addCharacters, (state, actions) => [
      ...state,
      actions.character,
    ])
  ),
});
