import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  loginGet(){
    this.router.navigate(['/login'])
  }

  homeGet(){
    this.router.navigate(['/home'])
  }

}
