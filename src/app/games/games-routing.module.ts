import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesHomeComponent } from './components/games-home/games-home.component';
import { GameEditComponent } from './components/game-edit/game-edit.component';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: GamesComponent
  },
  {
    path: 'edit/:id',
    component: GameEditComponent,
    outlet: 'details'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
