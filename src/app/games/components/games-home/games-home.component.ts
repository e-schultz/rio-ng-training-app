import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../../models/game';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import {
  selectGames,
  selectCompletedGames
} from '../../../selectors/game.selectors';
import { LoadGames } from '../../../game.actions';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.scss']
})
export class GamesHomeComponent implements OnInit {
  games$ = this.store$.pipe(select(selectGames));

  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.store$.dispatch(new LoadGames());
  }
}
