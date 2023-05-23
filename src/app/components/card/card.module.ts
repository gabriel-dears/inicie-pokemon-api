import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PrevButtonModule } from '../prev-button/prev-button.module';
import { NextButtonModule } from '../next-button/next-button.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    PrevButtonModule,
    NextButtonModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
