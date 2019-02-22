import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  label: string;
  ariaLabel: string;
  routerLink: string[];
  constructor() {}
  ngOnInit() {
    this.label = 'Game Progression';
    this.ariaLabel = 'Game Progression';
    this.routerLink = ['/'];
  }
}
