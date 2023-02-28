import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./components/detail/detail.component').then(
        (m) => m.DetailComponent
      ),
  },
];
