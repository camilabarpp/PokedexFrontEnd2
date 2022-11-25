import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokedexApiService } from 'src/app/service/pokedex-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'http://localhost:8080/pokemons';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;
getAllPokemons: any;

  constructor(
    private _activedRoute: ActivatedRoute,
    private _apiPokedexService: PokedexApiService
  ) {}

  // ngOnInit(): void {
  //   const id = this._activedRoute.snapshot.params['id'];
  //   forkJoin(
  //     this._apiPokedexService.getPokemons(`${this.urlPokemon}/${id}`)
  //   ).subscribe(
  //     (response) => {
  //       this.pokemon = response;
  //       this.isLoading = true;
  //     },
  //     (error) => (this.apiError = true)
  //   );
  // }

  ngOnInit(): void {
    const id = this._activedRoute.snapshot.params['id'];
    forkJoin(
      this._apiPokedexService.getPokemons(`${this.urlPokemon}/${id}`)
    ).subscribe(
      (response) => {
        this.pokemon = response;
        this.isLoading = true;
      },
      (error) => (this.apiError = true)
    );
  }
}
