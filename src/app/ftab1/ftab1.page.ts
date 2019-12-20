import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Paciente } from '../interfaces/paciente';
import { Subscription } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ftab1',
  templateUrl: 'ftab1.page.html',
  styleUrls: ['ftab1.page.scss']
})
export class FTab1Page {
  private pacientes = new Array<Paciente>();
  private pacienteSubscription: Subscription;
  public userProfile: any;

  constructor(private menuCtrl: MenuController, 
    private router: Router, 
    private authService: AuthService,
    private pacienteService: PacienteService,
    private userservice: UserService,
    ){
      this.pacienteSubscription = this.pacienteService.getPacientes().subscribe(data => {
        this.pacientes = data;
            });
    };

  perfil(){
    this.router.navigate(['perfil']);
}
  ajuda(){
    this.router.navigate(['ajuda']);
}

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    }
  }

  ionViewWillEnter(){
    console.log(this.userProfile)
    this.userservice
    .getUserProfile().get()
    .then( userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.data();
    });
  }

}
