import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/components/card/card.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
  ]
})
export class HomeModule { }
