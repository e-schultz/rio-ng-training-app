import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GamesApiService } from 'src/app/games/services/games-api/games-api.service';
@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  profile$: any;
  constructor(private http: HttpClient, private gamesApi: GamesApiService) {}

  ngOnInit() {
    this.profile$ = this.http.get('http://localhost:3000/profile');
  }
}
