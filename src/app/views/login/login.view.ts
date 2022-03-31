import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.css']
})
export class LoginView implements OnInit {

  constructor(private readonly router: Router, private readonly userService: UserService) { }

  handleLogin(): void{
    this.router.navigateByUrl("/pokemons")
  }

  ngOnInit(): void {
    if(this.userService.user !== undefined){
      this.router.navigateByUrl("/pokemons")
    }
  }

}