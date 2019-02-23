import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import {
  ActionTypes,
  LoadProfile,
  LoadProfileSuccess,
  LoadProfileError,
  SaveProfile,
  SaveProfileSuccess
} from './profile.actions';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../models/profile';

@Injectable()
export class ProfileEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<LoadProfile>(ActionTypes.LoadProfile),
    switchMap(action =>
      this.http.get<Profile>('http://localhost:3000/profile').pipe(
        map(
          profile =>
            new LoadProfileSuccess({
              profile
            })
        ),
        catchError(error => observableOf(new LoadProfileError({ error })))
      )
    )
  );
}
