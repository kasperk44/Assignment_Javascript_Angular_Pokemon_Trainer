import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { UserService } from './user.service';
const { apiKey, apiUsers } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonCapturedService {

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly userService: UserService
  ) {}

  public addToCaptured(pokemonName: string): Observable<User> {
    if (!this.userService.user) {
      throw new Error('addToCaptured: There is no user');
    }
    const user: User = this.userService.user;
    const pokemon: Pokemon | undefined =
      this.pokemonService.pokemonByName(pokemonName);
    if (!pokemon) {
      throw new Error('addToCaptured: no pokemon with id: ' + pokemonName);
    }
    if (this.userService.inCaptured(pokemonName)) {
      this.userService.removeFromCaptured(pokemonName)
    }
    else {
      this.userService.addToCaptured(pokemon);
    }
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey,
    });
    return this.http
      .patch<User>(
        `${apiUsers}/${user.id}`,
        {
          pokemon: [...user.pokemon],
        },
        {
          headers,
        }
      )
      .pipe(
        tap((updatedUser: User) => {
          this.userService.user = updatedUser;
        })
      );
  }
}
