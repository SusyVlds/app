import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  registroGet(){
    this.router.navigate(['/registro'])
  }

  homeGet(){
    this.router.navigate(['/home'])
  }

  passwordGet(){
    this.router.navigate(['/forgot-password'])
  }

  logInGet(){
    this.router.navigate(['/login'])
  }

}
