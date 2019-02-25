import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesHomeComponent } from './components/games-home/games-home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameEditComponent } from './components/game-edit/game-edit.component';
import { GamesComponent } from './games.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { GameFormComponent } from './components/game-form/game-form.component';

@NgModule({
  declarations: [GamesHomeComponent, GameListComponent, GameEditComponent, GamesComponent, GameFormComponent],
  imports: [CommonModule, GamesRoutingModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule]
})
export class GamesModule {}
