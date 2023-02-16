import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

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
