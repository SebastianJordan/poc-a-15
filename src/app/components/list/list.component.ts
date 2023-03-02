import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/interfaces';
import { EpisodeActions} from 'src/app/store/api.actions';
import { DetailComponent } from '../detail/detail.component';
import { RouterLinkWithHref } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { selectAllEpisodes } from 'src/app/store/api.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [CommonModule, DetailComponent, RouterLinkWithHref, LetModule],
})
export class ListComponent implements OnInit {
  private store = inject(Store);
  readonly episodes$ =this.store.select(selectAllEpisodes);

  constructor() {}

  ngOnInit(): void {
    this.store.dispatch(EpisodeActions.getEpisodes());
  }
}
