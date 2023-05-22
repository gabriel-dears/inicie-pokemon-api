import { Component, OnInit } from '@angular/core';
import { CardOptions } from 'src/app/components/card/card';
import { Pokemon } from 'src/app/core/pokemon';
import { PokemonService } from 'src/app/core/pokemon.service';

@Component({
  selector: 'inicie-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  offset = 0;

  pokemons: Pokemon[] = [];

  isLastPrev = false;

  cardOptions: CardOptions = {
    showButtonNext: true,
    showButtonPrev: true,
    onClickButtonPrev: this.onClickPrevButton.bind(this),
    onClickButtonNext: this.onClickNextButton.bind(this),
  };

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPaginated({
      limit: 3,
      offset: this.offset,
      callbackAfterSubscribe: (pokemons) => {
        console.log(pokemons)
        this.pokemons = pokemons;
      },
    });
  }

  onClickPrevButton() {
    this.callbackAfterButtonClick(false);
  }

  onClickNextButton() {
    this.callbackAfterButtonClick();
  }

  private callbackAfterButtonClick(isNext = true) {

    isNext ? this.offset++ : this.offset--;

    this.getAllPaginated({
      limit: 3,
      offset: this.offset,
      callbackAfterSubscribe: (pokemons) => {
        this.pokemons = pokemons;
      }
    });
  }

  private getAllPaginated({
    limit,
    offset,
    callbackAfterSubscribe,
  }: {
    limit: number;
    offset: number;
    callbackAfterSubscribe: (pokemons: Pokemon[]) => any;
  }) {
    this.pokemonService
      .getAllPaginated(limit, offset)
      .subscribe((pokemonsReturn: Pokemon[]) => {
        callbackAfterSubscribe(pokemonsReturn);
      });
  }
}
