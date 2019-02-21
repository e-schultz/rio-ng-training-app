import { Component, OnInit } from '@angular/core';
import { GamesService, Game } from '../games/games.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  game$: Observable<Game>
  constructor(private gamesService: GamesService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.game$ = this.gamesService.get(+this.router.snapshot.params['id']);
  }

}
