import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatMenuModule } from '@angular/material';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent, NavButtonComponent],
  exports: [NavBarComponent],
  imports: [MatButtonModule, MatMenuModule, CommonModule, RouterModule]
})
export class NavBarModule {}
