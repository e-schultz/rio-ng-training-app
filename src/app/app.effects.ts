import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GamesApiService } from './services/games-api/games-api.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GameActionTypes, LoadGamesSuccess } from './game.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class AppEffects {
  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GameActionTypes.LOAD_GAMES),
    mergeMap(() =>
      this.gamesApiService.list().pipe(
        map(games => new LoadGamesSuccess({ games })),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private gamesApiService: GamesApiService
  ) {}
}
