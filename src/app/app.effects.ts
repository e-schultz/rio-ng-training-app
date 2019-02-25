import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { GameActionTypes, LoadGamesSuccess } from './game.actions';
import { EMPTY } from 'rxjs';
import { GamesApiService } from './games/services/games-api/games-api.service';

@Injectable()
export class AppEffects {
  /*@Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GameActionTypes.LOAD_GAMES),
    mergeMap(() =>
      this.gamesApiService.list().pipe(
        map(games => new LoadGamesSuccess({ games })),
        catchError(() => EMPTY)
      )
    )
  );*/

  constructor(private actions$: Actions) {}
}
