import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfileService } from './profile-service/profile.service';
import { MatToolbarModule, MatCardModule, MatButton, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ViewProfileComponent],
  providers: [ProfileService],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
