import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../../models/game';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import { selectGames, selectCompletedGames } from 'src/app/selectors/game.selectors';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.scss']
})
export class GamesHomeComponent implements OnInit {
  games$: Observable<Game[]>;
  completedGames$: Observable<Game[]>;
  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.games$ = this.store$.pipe(select(selectGames));
    this.completedGames$ = this.store$.pipe(select(selectCompletedGames));
  }
}
