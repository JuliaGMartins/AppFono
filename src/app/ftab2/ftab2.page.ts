import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-ftab2',
  templateUrl: 'ftab2.page.html',
  styleUrls: ['ftab2.page.scss']
})
export class FTab2Page {
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

