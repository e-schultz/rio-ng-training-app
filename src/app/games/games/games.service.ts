import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Game {
  id: number;
  name: string;
  image: string;
  platformId: number;
  priority: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  isComplete: false;
}

@Injectable({
  providedIn: "root"
})
export class GamesService {
  constructor(private http: HttpClient) {}

  update(game:Game):Observable<Game> {
    const { id } = game;
    return this.http.put<Game>(`http://localhost:3000/games/${id}`,game);
  }
  list(): Observable<Game[]> {
    return this.http.get<Game[]>(`http://localhost:3000/games/`);
  }
  get(id: number): Observable<Game> {
    return this.http.get<Game>(`http://localhost:3000/games/${id}`);
  }
}
