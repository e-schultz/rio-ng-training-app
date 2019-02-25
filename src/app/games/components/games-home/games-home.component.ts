import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../../models/game';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import { selectGames, selectCompletedGames } from 'src/app/selectors/game.selectors';
import { LoadGames } from 'src/app/game.actions';
import { GamesApiService } from '../../services/games-api/games-api.service';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.scss']
})
export class GamesHomeComponent implements OnInit {
  games$; // = //this.store$.pipe(select(selectGames));

  constructor(private store$: Store<State>, private gamesApi: GamesApiService) {}

  ngOnInit() {
    this.games$ = this.gamesApi.list();
    this.store$.dispatch(new LoadGames());
  }
}
