import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { CardModule } from './components/card/card.module';
import { PrevButtonModule } from './components/prev-button/prev-button.module';
import { NextButtonModule } from './components/next-button/next-button.module';
import { MostWantedModule } from './components/most-wanted/most-wanted.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    MostWantedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
