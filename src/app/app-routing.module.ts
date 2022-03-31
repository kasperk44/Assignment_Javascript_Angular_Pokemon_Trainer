import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginView } from './views/login/login.view';
import { PokemonCatalogueView } from './views/pokemon-catalogue/pokemon-catalogue.view';
import { TrainerView } from './views/trainer/trainer.view';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginView,
  },
  {
    path: 'pokemons',
    component: PokemonCatalogueView,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'trainer',
    component: TrainerView,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
