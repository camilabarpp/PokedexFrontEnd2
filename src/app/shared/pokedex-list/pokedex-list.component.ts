import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokedexApiService } from 'src/app/service/pokedex-api.service';
import { Pokemon, SpecificPokemon } from 'src/app/service/PokemonModel';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(private pokeApiService: PokedexApiService) {}

  // ngOnInit(): void {
  //   this.pokeApiService.listAllPokemons.subscribe(
  //     (res) => {
  //       this.setAllPokemons = res.results;
  //       this.getAllPokemons = this.setAllPokemons;
  //       console.log(res)
  //     },
  //     (error) => {
  //       this.apiError = true;
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.pokeApiService.listAllPokemons.subscribe((response) => {
      this.setAllPokemons = response[0].results;
      this.getAllPokemons = this.setAllPokemons
      console.log(response[0].results[0].name);
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
