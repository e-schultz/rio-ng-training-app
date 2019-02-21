import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfileService } from './profile-service/profile.service';
import { MatToolbarModule, MatCardModule, MatButton, MatButtonModule, MatInputModule } from '@angular/material';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewProfileComponent, ProfileCardComponent, EditProfileComponent],
  providers: [ProfileService],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
