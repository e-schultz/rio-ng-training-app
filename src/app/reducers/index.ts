import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Game } from '../models/game';
import { GameActionTypes, GameActions } from '../game.actions';

export interface GameState {
  isLoading: boolean;
  games: Game[];
}

const initialGameState = {
  isLoading: false,
  games: [
    {
      id: 1,
      dateCreated: '2018-09-11T14:07:46+00:00',
      name: 'God of War',
      image: 'https://howlongtobeat.com/gameimages/38050_God_of_War.jpg',
      platformId: 1,
      priority: 8,
      numberOfHoursPlayed: 2,
      numberOfHoursToComplete: 19.5,
      isComplete: false
    },
    {
      id: 2,
      dateCreated: '2018-09-11T14:07:46+00:00',
      name: 'Octopath Traveler',
      image: 'https://howlongtobeat.com/gameimages/53592_Octopath_Traveler.png',
      platformId: 2,
      priority: 10,
      numberOfHoursPlayed: 35,
      numberOfHoursToComplete: 56,
      isComplete: false
    },
    {
      id: 3,
      dateCreated: '2018-09-11T14:07:46+00:00',
      name: 'Dragon Quest XI: Echoes of an Elusive Age',
      image: 'https://howlongtobeat.com/gameimages/39508_Dragon_Quest_XI_In_Search_of_Departed_Time.jpg',
      platformId: 1,
      priority: 10,
      numberOfHoursPlayed: 2,
      numberOfHoursToComplete: 56.5,
      isComplete: false
    }
  ]
};
export interface State {
  game: GameState;
}

export const gameReducer = (state: GameState = initialGameState, action: GameActions) => {
  switch (action.type) {
    case GameActionTypes.LOAD_GAMES:
      return { ...state, isLoading: true };
    case GameActionTypes.LOAD_GAMES_SUCCESS:
      return { ...state, games: [...action.payload.games], isLoading: false };
    default:
      return state;
  }
};
export const reducers: ActionReducerMap<State> = {
  game: gameReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
