import {
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Character, Episode } from '../interfaces';

export const EpisodeActions = createActionGroup({
  source: 'Episode',
  events: {
    'Get episodes': emptyProps(),
    'Set episodes': props<{ episodes: Array<Episode> }>(),
    'Get episode': props<{ id: string }>(),
    'Set episode': props<Episode>(),
  },
});

export const CharacterActions = createActionGroup({
  source: 'Character',
  events: {
    'Get Characters': props<{ url: string }>(),
    'Add Characters': props<{ character: Character }>(),
    'clear Characters': emptyProps(),
  },
});
