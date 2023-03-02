import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { provideState } from '@ngrx/store';
import { characterFeature } from './store/api.reducer';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    providers:[
      provideState(characterFeature),
    ],
    loadComponent: () =>
      import('./components/detail/detail.component').then(
        (m) => m.DetailComponent
      ),
  },
];
