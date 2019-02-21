import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list/games-list.component';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { GameCardComponent } from './game-card/game-card.component';
import { GamesResolverService } from './games-resolver/games-resolver.service';
import { GamesService } from './games/games.service';

@NgModule({
  declarations: [GamesListComponent, GameCardComponent],
  providers: [GamesService, GamesResolverService],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class GamesModule { }
