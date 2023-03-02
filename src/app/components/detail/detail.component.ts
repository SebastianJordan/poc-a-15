import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CharacterActions, EpisodeActions } from 'src/app/store/api.actions';
import { selectAllCharacters, selectEpisode } from 'src/app/store/api.selector';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [CommonModule, LetModule, NgOptimizedImage],
  standalone: true,
})
export class DetailComponent implements OnDestroy {
  private store = inject(Store);
  private route = inject(ActivatedRoute);

  readonly characters$ = this.store.select(selectAllCharacters);
  readonly episode$ = this.store.select(selectEpisode);
  sub: Subscription;
  constructor() {
    this.store.dispatch(
      EpisodeActions.getEpisode({
        id: this.route.snapshot.paramMap.get('id') || '0',
      })
    );
    this.store.dispatch(CharacterActions.clearCharacters());
    this.sub = this.episode$.pipe().subscribe(({ characters }) => {
      characters?.forEach((url) =>
        this.store.dispatch(CharacterActions.getCharacters({ url }))
      );
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
