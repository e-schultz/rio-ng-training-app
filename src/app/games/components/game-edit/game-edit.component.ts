import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit, OnDestroy {
  id: number;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    console.log('init called');
    this.router.paramMap.subscribe(n => {
      this.id = +n.get('id');
    });
  }
  ngOnDestroy() {
    console.log('destroyed');
  }
}
