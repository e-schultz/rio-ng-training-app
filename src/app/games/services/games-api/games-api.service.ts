import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/app/models/game';
import { APP_CONFIG, AppConfig } from '../../../app.config';
import { GamesModule } from '../../games.module';

// TODO: We will make this configurable later
// const BASE_URL = `http://localhost:3000/games`;
console.log('oh hai');
@Injectable({
  providedIn: 'root'
  // deps: [APP_CONFIG, HttpClient],
  // useFactory: (config, client) => new GamesApiService(config, client)
})
export class GamesApiService {
  private baseUrl: string;
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {
    this.baseUrl = `${appConfig.apiBaseUrl}/games`;
  }
  list() {
    return this.http.get<Game[]>(this.baseUrl);
  }
  get(id: number) {
    return this.http.get<Game[]>(`${this.baseUrl}/${id}`);
  }
  update(game: Game) {
    return this.http.put<Game>(`${this.baseUrl}/${game.id}`, game);
  }
  create(game: Game) {
    const newGame = { ...game, id: undefined };
    return this.http.post<Game>(`${this.baseUrl}`, newGame);
  }
}
