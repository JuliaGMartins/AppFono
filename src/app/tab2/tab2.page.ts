import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { FonoaudiologoService } from '../services/fonoaudiologo.service';
import { Paciente } from '../interfaces/paciente';
import { Fonoaudiologo } from '../interfaces/fonoaudiologo';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private paciente = new Array<Paciente>();
  private fonoaudiologo = new Array<Fonoaudiologo>();
  private pacienteSubscription: Subscription;
  private fonoaudiologoSubscription: Subscription;
  public userProfile: any;
  public pacienteProfileID: any;
  public pacienteProfile: any;


  constructor(private userservice: UserService) {}

  ionViewWillEnter() {
    this.userservice
      .getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        this.userProfile.pacientes = [];
        this.userProfile.paciente.forEach(element => {
          firebase.firestore().doc(`/contas/${element.id}`).get().then(paciente => {
            this.userProfile.pacientes.push(paciente.data());
          });
        });
      });
  }
}
