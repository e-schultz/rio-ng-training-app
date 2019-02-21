import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GamesListComponent } from "./games-list/games-list.component";
import { GamesResolverService } from "./games-resolver/games-resolver.service";

const routes: Routes = [
  {
    path: "games",
    component: GamesListComponent,
    resolve: { games: GamesResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
