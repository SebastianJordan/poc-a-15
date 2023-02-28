import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Character, Episode } from 'src/app/interfaces';
import {
  clearCharacters,
  getCharacters,
  getEpisode,
} from 'src/app/store/api.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [CommonModule, LetModule, NgOptimizedImage],
  standalone: true,
})
export class DetailComponent implements OnDestroy {
  characters$: Observable<Array<Character>>;
  episode$: Observable<Episode>;
  sub: Subscription;
  constructor(
    private readonly store: Store<any>,
    private readonly route: ActivatedRoute
  ) {
    this.characters$ = this.store.select('characters');
    this.episode$ = this.store.select('episode');
    this.store.dispatch(
      getEpisode({ id: this.route.snapshot.paramMap.get('id') || '0' })
    );
    this.store.dispatch(clearCharacters());
    this.sub = this.episode$.pipe().subscribe(({ characters }) => {
      characters?.forEach((url) => this.store.dispatch(getCharacters({ url })));
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
