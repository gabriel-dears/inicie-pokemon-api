import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/pokemon';
import { CardOptions } from './card';

@Component({
  selector: 'inicie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  options!: CardOptions;

  @Input({ required: true })
  pokemon!: Pokemon;

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
