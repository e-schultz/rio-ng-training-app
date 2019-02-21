import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [{
  path: 'my-profile',
  children: [{
    path: '',
    component:  ViewProfileComponent
  },
  {
    path: 'edit',
    component: EditProfileComponent
  }
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
