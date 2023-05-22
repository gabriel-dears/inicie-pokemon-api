export interface BasicPokemon {
  name: string;
  url: string;
}

export interface PokemonPagination {
  count: number;
  next: string;
  previous: string;
  results: BasicPokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    back_default: string;
  }
}
