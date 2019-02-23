import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesHomeComponent } from './components/games-home/games-home.component';

const routes: Routes = [
  {
    path: '',
    component: GamesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
