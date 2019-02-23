import { Action } from '@ngrx/store';
import { Game } from './models/game';

export enum GameActionTypes {
  LOAD_GAMES = 'Load Games',
  LOAD_GAMES_SUCCESS = 'Load Games Success',
  SAVE_GAME = 'Save Game',
  SAVE_GAME_SUCCESS = 'Save Game Succces',
  CREATE_GAME = 'Create Game',
  CREATE_GAME_SUCCESS = 'Create Game Succces'
}
export class LoadGames implements Action {
  readonly type = GameActionTypes.LOAD_GAMES;
}

export class LoadGamesSuccess implements Action {
  readonly type = GameActionTypes.LOAD_GAMES_SUCCESS;
  constructor(public payload: { games: Game[] }) {}
}

export class SaveGame implements Action {
  readonly type = GameActionTypes.SAVE_GAME;
  constructor(public payload: { game: Game }) {}
}

export class SaveGameSuccess implements Action {
  readonly type = GameActionTypes.SAVE_GAME;
  constructor(public payload: { game: Game }) {}
}

export class CreateGame implements Action {
  readonly type = GameActionTypes.CREATE_GAME;
  constructor(public payload: { game: Game }) {}
}

export class CreateGameSuccess implements Action {
  readonly type = GameActionTypes.CREATE_GAME_SUCCESS;
  constructor(public payload: { game: Game }) {}
}

export type GameActions = LoadGames | LoadGamesSuccess | SaveGame | SaveGameSuccess | CreateGame | CreateGameSuccess;
