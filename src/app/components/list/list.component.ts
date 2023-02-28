import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/interfaces';
import { getEpisodes } from 'src/app/store/api.actions';
import { DetailComponent } from '../detail/detail.component';
import { RouterLinkWithHref } from '@angular/router';
import { LetModule } from '@ngrx/component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [CommonModule, DetailComponent, RouterLinkWithHref,  LetModule],
})
export class ListComponent {
  episodes$: Observable<Array<Episode>>;

  constructor(private readonly store: Store<any>) {
    this.episodes$ = this.store.select('episodes');
    this.store.dispatch(getEpisodes());
  }
}
