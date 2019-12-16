import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';

@Component({
  selector: 'app-ftab2',
  templateUrl: 'ftab2.page.html',
  styleUrls: ['ftab2.page.scss']
})
export class FTab2Page {
  public userProfile: any;
  public pacienteProfileID: any;
  public pacienteProfile: any;
  public exercicioProfileID: any;
  public exercicioProfile: any;


  constructor(private userservice: UserService, private router: Router) {}

  fpaciente(paciente: any, id:any){ 
    FexerciciosPacienteService.paciente = paciente;
    //aqui
    FexerciciosPacienteService.id = id;
    //console.log(id);
    this.router.navigate(['fpaciente']);
}

  ionViewWillEnter() {
    this.userservice.getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        this.userProfile.pacientes = [];
        this.userProfile.paciente.forEach(element => {
          firebase.firestore().doc(`/contas/${element.id}`).get().then(paciente => {
              let pacObj = {
                'id': paciente.id,
                'data': paciente.data()
              };
            this.userProfile.pacientes.push(pacObj);
      //console.log(this.userProfile.pacientes[0].id);
      //console.log(this.userProfile.pacientes[0].data);
          });
        });
      });
  }
}
