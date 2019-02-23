import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesHomeComponent } from './components/games-home/games-home.component';
import { GameListComponent } from './components/game-list/game-list.component';

@NgModule({
  declarations: [GamesHomeComponent, GameListComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
