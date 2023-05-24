import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostWantedComponent } from './most-wanted.component';
import { PrevButtonModule } from '../prev-button/prev-button.module';
import { NextButtonModule } from '../next-button/next-button.module';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    MostWantedComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PrevButtonModule,
    NextButtonModule
  ],
  exports: [
    MostWantedComponent,
  ]
})
export class MostWantedModule { }
