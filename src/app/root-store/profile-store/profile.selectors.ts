import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';
import { ProfileState } from './profile.state';
import { Profile } from '../../models/profile';
import { RootState } from '../root-state';
import { filter, map } from 'rxjs/operators';
import { pipe } from 'rxjs/internal/util/pipe';

export const selectProfile = createFeatureSelector<RootState, ProfileState>('profile');
export const selectCurrent = createSelector(
  selectProfile,
  state => state.current
);
export const selectFullName = pipe(
  select(selectCurrent),
  filter(current => !!current),
  map(({ firstName, lastName }) => `${firstName} ${lastName}`)
);
