import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  @Input() label: string;
  @Input() ariaLabel: string;
  // tslint:disable-next-line: no-input-rename
  @Input('link') routerLink: string[];
  constructor() {}
  ngOnInit() {}
}
