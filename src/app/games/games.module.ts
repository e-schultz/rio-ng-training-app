import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list/games-list.component';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  declarations: [GamesListComponent, GameCardComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class GamesModule { }
