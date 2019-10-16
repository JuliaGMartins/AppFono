import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Paciente } from '../interfaces/paciente';
import { Subscription } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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

  meuperfil(){
    this.router.navigate(['meu-perfil']);
}
  opcoes(){
    this.router.navigate(['opcoes']);
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

  ngOnDestroy(){
    this.pacienteSubscription.unsubscribe();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
