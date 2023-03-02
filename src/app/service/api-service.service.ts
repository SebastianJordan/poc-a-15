import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Character, Episode } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  constructor() {}

  getAllEpisodes() {
    return this.http.get<any>('https://rickandmortyapi.com/api/episode');
  }

  getEpisode(id: string) {
    return this.http.get<Episode>(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
  }

  getCharacter(url: string) {
    return this.http.get<Character>(url);
  }
}
