import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../models/game';

// TODO: We will make this configurable later
const BASE_URL = `http://localhost:3000/games`;

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Game[]>(BASE_URL);
  }
  get(id: number) {
    return this.http.get<Game[]>(`${BASE_URL}/${id}`);
  }
  update(game: Game) {
    return this.http.put<Game>(`${BASE_URL}/${game.id}`, game);
  }
  create(game: Game) {
    const newGame = { ...game, id: undefined };
    return this.http.post<Game>(`${BASE_URL}`, newGame);
  }
}
