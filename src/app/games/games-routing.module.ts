import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GamesListComponent } from "./games-list/games-list.component";
import { GamesResolverService } from "./games-resolver/games-resolver.service";
import { GameEditComponent } from "./game-edit/game-edit.component";

const routes: Routes = [
  {
    path: "games",
    children: [
      {
        path: "",
        component: GamesListComponent,
        resolve: { games: GamesResolverService }
      },
      // note - routes can't start with a slash
      // if we had /edit/:id angular would give an error:
      /*
      main.ts:13 Error: Invalid configuration of route 'games//edit/:id': path cannot start with a slash
      */
      {
        path: "edit/:id",
        component: GameEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
