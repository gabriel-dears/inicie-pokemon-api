import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/core/pokemon';

@Component({
  selector: 'inicie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input({ required: true })
  pokemon!: Pokemon;

  @Input()
  showButtonPrev = false;

  @Output()
  onClickButtonPrev = new EventEmitter<any>();

  @Input()
  showButtonNext = false;

  @Output()
  onClickButtonNext = new EventEmitter<any>();

  @Input()
  opacity = 1;

  @Input()
  showEmpty = false;

  formatId(id: number | undefined): string {
    const idString = id?.toString() || '';

    if(idString.length < 3) {
      return '0'.repeat(3 - idString.length) + idString;
    }

    return idString;
  }

  formatNumber(number: number | undefined) {
    return ((number || 0) / 10).toFixed(2);
  }

}
