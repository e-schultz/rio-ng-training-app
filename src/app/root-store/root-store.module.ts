import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileStoreModule } from './profile-store/profile-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, Effect } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootState } from './root-state';
import { profileReducer } from './profile-store/profile.reducer';

@NgModule({
  imports: [
    CommonModule,
    ProfileStoreModule,
    ProfileStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ]
})
export class RootStoreModule {}
