import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  template: `
    <div class="container mx-auto px-4">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
      >
        Api Rick And Morty
      </h1>
      <app-list></app-list>
    </div>
  `,
  standalone: true,
  imports: [ListComponent],
})
export class HomeComponent {}
