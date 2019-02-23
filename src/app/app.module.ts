import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './shared/navbar/nav-bar.module';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [RootStoreModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, NavBarModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
