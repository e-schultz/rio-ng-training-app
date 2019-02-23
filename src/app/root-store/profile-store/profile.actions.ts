import { Action } from '@ngrx/store';
import { Profile } from '../../models/profile';

export enum ActionTypes {
  LoadProfile = '[App] Load Profile',
  LoadProfileSuccess = '[Profile API] Load Profile Success',
  LoadProfileError = '[Profile API] Load Profile Error',
  SaveProfile = '[Profile Edit Page] Save Profile',
  SaveProfileSuccess = '[Profile API] Save Profile Success'
}

export class LoadProfile implements Action {
  readonly type = ActionTypes.LoadProfile;
}

export class LoadProfileSuccess implements Action {
  readonly type = ActionTypes.LoadProfileSuccess;
  constructor(public payload: { profile: Profile }) {}
}

export class SaveProfile implements Action {
  readonly type = ActionTypes.SaveProfile;
  constructor(public payload: { profile: Profile }) {}
}

export class SaveProfileSuccess implements Action {
  readonly type = ActionTypes.SaveProfileSuccess;
  constructor(public payload: { profile: Profile }) {}
}

export class LoadProfileError implements Action {
  readonly type = ActionTypes.LoadProfileError;
  constructor(public payload: { error: string }) {}
}
export type ProfileActions = LoadProfile | LoadProfileSuccess | SaveProfile | SaveProfileSuccess;
