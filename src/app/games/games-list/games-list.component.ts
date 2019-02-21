import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Game, GamesService } from '../games/games.service';

@Component({
  selector: "app-games-list",
  templateUrl: "./games-list.component.html",
  styleUrls: ["./games-list.component.scss"]
})
export class GamesListComponent implements OnInit {

  games$: Observable<Game[]>;
  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games$ = this.gamesService.list()

  }
}
