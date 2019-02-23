import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileEffects } from './profile.effects';
import { profileReducer } from './profile.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  providers: [ProfileEffects]
})
export class ProfileStoreModule {}
