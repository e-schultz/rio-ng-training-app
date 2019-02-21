import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { Observable } from 'rxjs';
interface Game {
  id: number;
  name: string;
  image: string;
  platformId: number;
  priority: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  isComplete: false;
}
@Component({
  selector: "app-games-list",
  templateUrl: "./games-list.component.html",
  styleUrls: ["./games-list.component.scss"]
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];
  games$: Observable<Game[]>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.games$ = this.http
      .get<Game[]>("http://localhost:3000/games")
      .pipe<Game[]>(delay(4000));
  }
}
