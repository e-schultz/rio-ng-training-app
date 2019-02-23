import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileHomeComponent } from './components/profile-home/profile-home.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileHomeComponent,
    children: [
      {
        path: 'view',
        component: ProfileViewComponent
      },
      {
        path: 'edit',
        component: ProfileEditComponent
      },
      {
        path: '',
        redirectTo: 'view'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
