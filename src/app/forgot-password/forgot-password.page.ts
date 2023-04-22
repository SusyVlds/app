import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, registerLocaleData } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterServiceService } from '../services/register-service.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router,
    private location: Location,
    private registerService: RegisterServiceService,    //nombre del objeto      contiene todos los objetos 
    private formBuilder: FormBuilder,
    private alertController: AlertController) {

  }

  ngOnInit() {
  }

  loginGet() {
    this.router.navigate(['/login'])
  }

  homeGet() {
    this.router.navigate(['/home'])
  }


  


}




