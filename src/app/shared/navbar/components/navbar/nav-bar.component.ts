import { Component, OnInit } from '@angular/core';
import { RootState } from 'src/app/root-store/root-state';
import { Store, select } from '@ngrx/store';
import { selectFullName } from 'src/app/root-store/profile-store/profile.selectors';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  fullName: string;
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
    }
  ];
  constructor(private store$: Store<RootState>) {}

  ngOnInit() {
    this.store$.pipe(selectFullName).subscribe(n => {
      this.fullName = n;
    });
  }
}
