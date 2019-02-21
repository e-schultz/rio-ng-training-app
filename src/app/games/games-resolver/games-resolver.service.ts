import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Game, GamesService } from "../games/games.service";

@Injectable({
  providedIn: "root"
})
export class GamesResolverService implements Resolve<Game[]> {
  constructor(private gamesService: GamesService) {}
  resolve() {
    return this.gamesService.list();
  }
}
