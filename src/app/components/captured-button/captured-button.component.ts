import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { PokemonCapturedService } from 'src/app/services/pokemon-captured.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-captured-button',
  templateUrl: './captured-button.component.html',
  styleUrls: ['./captured-button.component.css'],
})
export class CapturedButtonComponent implements OnInit {

  public isCaptured: boolean = false;
  @Input() pokemonName: string = '';

  public loading: boolean = false;

  constructor(
    private userService: UserService,
    private readonly capturedService: PokemonCapturedService) {}

  ngOnInit(): void {
    this.isCaptured = this.userService.inCaptured(this.pokemonName);
  }

  onCaptureClick(): void {
    this.loading = true;
    this.capturedService.addToCaptured(this.pokemonName)
    .subscribe({
      next: (user: User) => {
        this.loading = false;
        this.isCaptured = this.userService.inCaptured(this.pokemonName)
      },
      error: (error: HttpErrorResponse) => {
        console.log('ERROR', error.message);
      },
    });
  }
}