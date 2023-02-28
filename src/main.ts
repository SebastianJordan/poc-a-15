import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './app/main.component';
import { routes } from 'src/app/main.routing.module';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  apiCharacters,
  apiEpisode,
  apiEpisodes,
} from './app/store/api.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ApiEffects } from './app/store/api.effect';

bootstrapApplication(MainComponent, {
  providers: [
    provideRouter(routes),
    provideStore({
      episodes: apiEpisodes,
      episode: apiEpisode,
      characters: apiCharacters,
    }),
    provideStoreDevtools(),
    provideHttpClient(),
    provideEffects(ApiEffects),
  ],
}).catch((err) => console.error(err));
