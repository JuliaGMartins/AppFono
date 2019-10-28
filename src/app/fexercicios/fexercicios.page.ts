import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ExerciciosService } from '../services/exercicios.service';

@Component({
  selector: 'app-fexercicios',
  templateUrl: './fexercicios.page.html',
  styleUrls: ['./fexercicios.page.scss'],
})
export class FexerciciosPage implements OnInit {

  public userProfile: any;
  public pacienteProfileID: any;
  public pacienteProfile: any;
  public exercicioProfileID: any;
  public exercicioProfile: any;
  public paciente: any;
  public listaEx: any;

  constructor(private userservice: UserService) {}
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.listaEx = [];
    firebase.firestore().collection(`exercicios`).get().then(ex =>{
      ex.forEach(exercicio =>{
        this.listaEx.push(exercicio.data());
      });
    });


    // this.userservice
    //   .getUserProfile().get()
    //   .then(userProfileSnapshot => {
    //     this.userProfile = userProfileSnapshot.data();
    //     this.userProfile.pacientes = [];
    //     this.userProfile.paciente.forEach(element => {
    //       firebase.firestore().doc(`/contas/${element.id}`).get().then(paciente => {
    //         this.userProfile.pacientes.push(paciente.data());
    //         //console.log(this.userservice)
    //         //console.log(paciente.data())
    //       });
    //     });
    //     // console.log(this.userProfile.pacientes)
    //     // this.userProfile.pacientes.exercicio = [];
    //     // this.userProfile.pacientes.exercicios.forEach(element => {
    //     //   firebase.firestore().doc(`/exercicios/${element.id}`).get().then(exercicios => {
    //     //     this.userProfile.pacientes.exercicio.push(exercicios.data());
    //     //     console.log(exercicios.data())
    //     //   });
    //     // });
    //   });
  }

}
