import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PrevButtonModule } from '../prev-button/prev-button.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    PrevButtonModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
