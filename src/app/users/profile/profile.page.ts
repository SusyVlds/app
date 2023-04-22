import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})



export class ProfilePage implements OnInit {

  user: any;
  id_user: any;

  constructor(private router: Router, private register: RegisterServiceService, private alertController: AlertController) { }

  ngOnInit() {
    this.id_user = localStorage.getItem('id_user')
    if (this.register.isLoggedIn()) {
      this.register.getCurrentUser(this.id_user).subscribe(
        (response) => {
          this.user = response.data;
          console.log('El usuario logeado es>',this.user)
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(){
    this.register.logout().subscribe(
      async (response: any)  => {
        console.log(response);
        localStorage.setItem('access_token',response.token)    
        
        console.log('Sesión cerrada correctamente');
        const alert = await this.alertController.create({
          header: 'Sesión cerrada',
          //message: `Sesión cerrada `,
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['/home']);
      });
  }

  
estacionamientos(){
  this.router.navigate(['/estacionamientos'])
}

}
