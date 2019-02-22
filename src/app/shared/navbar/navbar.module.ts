import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule, MatMenuModule } from "@angular/material";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [MatButtonModule, MatMenuModule, CommonModule]
})
export class NavbarModule {}
