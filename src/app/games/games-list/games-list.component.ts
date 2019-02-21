import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Game, GamesService } from "../games/games.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-games-list",
  templateUrl: "./games-list.component.html",
  styleUrls: ["./games-list.component.scss"]
})
export class GamesListComponent implements OnInit {
  games: Game[];
  // games$: Observable<Game[]>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.games = this.route.snapshot.data.games;
    // this.games$ = this.route.data.pipe(map(({ games }) => games));
  }
}
