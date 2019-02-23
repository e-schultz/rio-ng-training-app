import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../../models/game';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.scss']
})
export class GamesHomeComponent implements OnInit {
  games$: Observable<Game[]>;
  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.games$ = this.store$.select(n => n.game.games);
  }
}
