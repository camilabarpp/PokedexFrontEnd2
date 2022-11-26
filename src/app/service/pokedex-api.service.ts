import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Pokemon, Result, SpecificPokemon } from './PokemonModel';

@Injectable({
  providedIn: 'root',
})
export class PokedexApiService {
  private urlApi: string = 'http://localhost:8080/pokemons';

  constructor(private _http: HttpClient) {}

  get listAllPokemons(): Observable<any> {
    return this._http.get<any>(this.urlApi).pipe(
      tap((response) => response),
      tap((response) => {
        response[0].results.map((responsePokemons: any) => {
          this.getPokemons(responsePokemons.url).subscribe(
            (response) => (responsePokemons.results = response)
          );
        });
      })
    );
  }

  public getPokemons(url: string): Observable<any> {
    return this._http.get<any>(url).pipe(map((response) => response));
  }
}
