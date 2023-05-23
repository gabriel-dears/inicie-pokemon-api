import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, of, switchMap } from 'rxjs';
import { Pokemon, PokemonPagination } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAllPaginated(limit = 20, offset = 20): Observable<any> {
    return this.httpClient
      .get<PokemonPagination>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      )
      .pipe(
        switchMap((pagination) =>
          this.getPokemons(pagination.results.map((b) => b.url))
        )
      );
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }

  async getPokemons(urls: string[]): Promise<Pokemon[]> {
    const requests = urls.map((url) => this.getPokemon(url));
    let promises: any = {};

    requests.forEach((req, i) => {
      promises['promise' + i] = new Promise<Pokemon>((res) => {
        req.subscribe((result) => res(result));
      });
    });

    return await Promise.all<Pokemon[]>(Object.values(promises));
  }
}
