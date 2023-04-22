import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-estacionamiento-centro',
  templateUrl: './estacionamiento-centro.page.html',
  styleUrls: ['./estacionamiento-centro.page.scss'],
})
export class EstacionamientoCentroPage implements OnInit {

  constructor(private router: Router, private location: Location) { }


  ngOnInit() {
  }

  estacionamientos(){
    this.router.navigate(['/estacionamientos'])
  }

  esta1(){
    this.router.navigate(['/estacionamientos/estacionamiento-centro'])
  }

}
