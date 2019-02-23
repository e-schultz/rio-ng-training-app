import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navItems = [
    {
      label: 'Game Progression',
      ariaLabel: 'Game Progression',
      link: ['/']
    },
    {
      label: 'Games',
      ariaLabel: 'Games',
      link: ['/games']
    },
    {
      label: 'Dashboard',
      ariaLabel: 'Dashboard',
      link: ['/dashboard']
    },
    {
      isSpacer: true
    },
    {
      label: 'Evan Schultz',
      ariaLabel: 'Evan Schultz',
      link: ['/profile']
    }
  ];
  constructor() {}

  ngOnInit() {}
}
