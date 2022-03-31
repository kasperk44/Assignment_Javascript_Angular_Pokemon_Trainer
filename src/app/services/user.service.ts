import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;

  get user(): User | undefined {
    return this._user;
  }

  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  public inCaptured(pokemonName: string): boolean {
    if (this._user) {
      for (let i = 0; i < this._user?.pokemon.length; i++) {
        if (this._user?.pokemon[i] === pokemonName) {
          return true;
        }
      }
    }
    return false;
  }

  public addToCaptured(pokemon: Pokemon): void {
    if (this._user) {
      this._user.pokemon.push(pokemon.name);
    }
  }

  public removeFromCaptured(pokemonName: string): void {
    if (this._user) {
      for (let i = 0; i < this._user?.pokemon.length; i++) {
        if (this._user?.pokemon[i] === pokemonName) {
          this._user.pokemon.splice(i,1)
          console.log(this._user.pokemon)
        }
      }
    }
  }
}
