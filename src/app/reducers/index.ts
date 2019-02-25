import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Game } from '../models/game';
import { GameActionTypes, GameActions } from '../game.actions';

export interface GameState {
  isLoading: boolean;
  games: Game[];
}

const initialGameState = {
  isLoading: false,
  games: []
};
export interface State {
  game: GameState;
}

export function gameReducer(
  state: GameState = initialGameState,
  action: GameActions
) {
  switch (action.type) {
    case GameActionTypes.LOAD_GAMES:
      return { ...state, isLoading: true };
    case GameActionTypes.LOAD_GAMES_SUCCESS:
      return { ...state, games: [...action.payload.games], isLoading: false };
    default:
      return state;
  }
}
export const reducers: ActionReducerMap<State> = {
  game: gameReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
