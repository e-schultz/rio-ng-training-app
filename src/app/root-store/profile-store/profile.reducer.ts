import { ProfileState, initialState } from './profile.state';
import { ProfileActions, ActionTypes } from './profile.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export function profileReducer(state = initialState, action: ProfileActions): ProfileState {
  switch (action.type) {
    case ActionTypes.LoadProfile:
      return { ...state, isLoading: true, error: null };
    case ActionTypes.LoadProfileSuccess:
      return { ...state, current: action.payload.profile, isLoading: false, error: null };
    default:
      return state;
  }
}
