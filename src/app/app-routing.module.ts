import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderComponent } from './shared/placeholder/placeholder.component';

const routes: Routes = [{
  path: '',
  component: PlaceholderComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
