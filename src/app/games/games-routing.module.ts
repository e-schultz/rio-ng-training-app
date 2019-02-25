import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesHomeComponent } from './components/games-home/games-home.component';
import { GameEditComponent } from './components/game-edit/game-edit.component';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: GamesComponent,
    children: [
      {
        path: ':id/edit',
        component: GameEditComponent,
        outlet: 'details'
      },
      {
        path: '',
        component: GamesHomeComponent,
        outlet: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
