import { createSelector } from '@ngrx/store';
import { State } from '../reducers';

export const selectGames = (state: State) => state.game.games;
export const selectCompletedGames = createSelector(
  selectGames,
  games => games.filter(game => game.isComplete)
);
export const selectIncompleteGames = createSelector(
  selectGames,
  games => games.filter(game => game.isComplete)
);
