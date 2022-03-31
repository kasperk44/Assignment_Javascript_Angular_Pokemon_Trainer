import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginView } from './views/login/login.view';
import { PokemonCatalogueView } from './views/pokemon-catalogue/pokemon-catalogue.view';
import { TrainerView } from './views/trainer/trainer.view';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CapturedButtonComponent } from './components/captured-button/captured-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginView,
    PokemonCatalogueView,
    TrainerView,
    LoginFormComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    NavbarComponent,
    CapturedButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
