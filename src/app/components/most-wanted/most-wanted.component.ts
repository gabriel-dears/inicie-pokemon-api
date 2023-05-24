import { Component, HostListener } from '@angular/core';
import { Pokemon } from 'src/app/core/pokemon';

@Component({
  selector: 'inicie-most-wanted',
  templateUrl: './most-wanted.component.html',
  styleUrls: ['./most-wanted.component.css'],
})
export class MostWantedComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const pokemonsListSize = this.getPokemonsListSize(window.innerWidth);
    this.visiblePokemons = this.basePokemons.filter(
      (_, i) => i < pokemonsListSize
    );
  }

  basePokemons = [1, 2, 3, 4, 5];

  visiblePokemons = [...this.basePokemons];

  pokemon: Pokemon = {
    id: 1,
    height: 10,
    name: 'teste',
    sprites: {
      front_default: '',
      back_default: '',
    },
    weight: 10,
  };

  private getPokemonsListSize(width: number) {
    if (width < 800) {
      return 1;
    }
    if (width >= 800 && width < 1000) {
      return 2;
    }
    if (width >= 1000 && width < 1200) {
      return 3;
    }
    if (width >= 1200 && width < 1450) {
      return 4;
    }

    return 5;
  }
}
