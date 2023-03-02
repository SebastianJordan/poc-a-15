import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './app/main.component';
import { routes } from 'src/app/main.routing.module';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { characterFeature, episodeFeature } from './app/store/api.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ApiEffects } from './app/store/api.effect';

bootstrapApplication(MainComponent, {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState(episodeFeature),
    provideEffects(ApiEffects),
    provideStoreDevtools(),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
