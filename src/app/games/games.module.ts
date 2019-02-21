import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list/games-list.component';
import { MatCardModule, MatGridListModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatInputModule } from '@angular/material';
import { GameCardComponent } from './game-card/game-card.component';
import { GamesResolverService } from './games-resolver/games-resolver.service';
import { GamesService } from './games/games.service';
import { GameFormComponent } from './game-form/game-form.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GamesListComponent, GameCardComponent, GameFormComponent, GameEditComponent],
  providers: [GamesService, GamesResolverService],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class GamesModule { }
