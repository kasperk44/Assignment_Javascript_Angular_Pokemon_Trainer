import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './trainer.view.html',
  styleUrls: ['./trainer.view.css'],
})
export class TrainerView implements OnInit {
  get user(): User | undefined {
    return this.userService.user;
  }

  get captured(): Pokemon[]{
    if (this.userService.user) {
      let capturedPokemonUndefined = [];
      let capturedPokemonDefined = [];
      for (let i = 0; i < this.userService.user.pokemon.length; i++) {
        capturedPokemonUndefined.push(this.pokemonCatalogueService.pokemonByName(this.userService.user.pokemon[i]));
        capturedPokemonDefined.push({name: capturedPokemonUndefined[i]?.name!, url: capturedPokemonUndefined[i]?.url!, avatar: capturedPokemonUndefined[i]?.avatar!})
      }
      return capturedPokemonDefined;
    }
    return [];
  }

  constructor(
    private userService: UserService,
    private pokemonCatalogueService: PokemonCatalogueService) {}

  ngOnInit(): void {}
}
