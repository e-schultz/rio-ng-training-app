import { Component, OnInit } from '@angular/core';
import { RootState } from './root-store/root-state';
import { Store } from '@ngrx/store';
import { LoadProfile } from './root-store/profile-store/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rio-training-app';
  constructor(private store$: Store<RootState>) {}
  ngOnInit() {
    this.store$.dispatch(new LoadProfile());
  }
}
