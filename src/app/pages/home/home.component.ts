import { Component, HostListener, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/pokemon';
import { PokemonService } from 'src/app/core/pokemon.service';

@Component({
  selector: 'inicie-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showCornerCards = window.innerWidth > 950;
  }

  showCornerCards = true;

  offset = 0;

  pokemons: Pokemon[] = [];

  isLastPrev = false;
  showButtonNext = true;
  showButtonPrev = true;
  onClickButtonPrev = this.onClickPrevButton.bind(this);
  onClickButtonNext = this.onClickNextButton.bind(this);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPaginated({
      limit: 3,
      offset: this.offset,
      callbackAfterSubscribe: (pokemons) => {
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
        if(pokemons?.length > 0) {
          this.pokemons = pokemons;
          this.showButtonPrev = true;
          this.showButtonNext = true;
          return;
        }

        if(this.pokemons[2].id === 10270) {
          [this.pokemons[0], this.pokemons[1]] = [{...this.pokemons[1]}, {...this.pokemons[2]}];
          this.showButtonNext = false;
        } else {
          [this.pokemons[1], this.pokemons[2]] = [{...this.pokemons[0]}, {...this.pokemons[1]}];
          this.showButtonPrev = false;
        }

        this.pokemons = [...this.pokemons];

        if(this.offset < -1 ) {
          this.offset = -1;
        }

        if(this.offset > 10268) {
          this.offset = 10268;
        }

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
