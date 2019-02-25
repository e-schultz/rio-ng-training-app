import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesHomeComponent } from './components/games-home/games-home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameEditComponent } from './components/game-edit/game-edit.component';
import { GamesComponent } from './games.component';

@NgModule({
  declarations: [GamesHomeComponent, GameListComponent, GameEditComponent, GamesComponent],
  imports: [CommonModule, GamesRoutingModule]
})
export class GamesModule {}
