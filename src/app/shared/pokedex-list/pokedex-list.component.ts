import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { forkJoin, pipe } from 'rxjs';
import { PokedexApiService } from 'src/app/service/pokedex-api.service';
import { Pokemon, SpecificPokemon } from 'src/app/service/PokemonModel';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  public getAllPokemons: any;
  public listAllPokemons: Array<{ any: any }> = [];

  public apiError: boolean = false;

  constructor(private pokeApiService: PokedexApiService) {}

  ngOnInit(): void {
    this.pokeApiService.listAllPokemons.subscribe(
      (response) => {
        (this.listAllPokemons = response.results),
          (this.getAllPokemons = this.listAllPokemons);
          console.log(response)
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.listAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
