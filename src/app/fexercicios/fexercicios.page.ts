import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { ExerciciosService } from '../services/exercicios.service';
//firebase.initializeApp(environment.firebase);

@Component({
  selector: 'app-fexercicios',
  templateUrl: './fexercicios.page.html',
  styleUrls: ['./fexercicios.page.scss'],
})
export class FexerciciosPage implements OnInit {
  public listaEx: any;
  public paciente: any;
  public listaDoPaciente: any;

  constructor() {
    this.listaEx = [];
    this.listaDoPaciente = [];
    this.paciente = null;
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.paciente = ExerciciosService.paciente;
    firebase.firestore().collection(`exercicios`).get().then(ex =>{
      ex.forEach(exercicio =>{
        this.listaEx.push(exercicio.data());

        this.paciente.listaPaciente = [];
        this.paciente.exercicios.forEach(element => {
          firebase.firestore().doc(`/exercicios/${element.id}`).get().then(exercicios => {
            this.paciente.listaPaciente.push(exercicios.data());
            console.log(this.paciente.exercicios);
          })
        })
      });
    });
    //console.log(this.listaEx);
    this.listaDoPaciente = this.paciente.exercicios;

    
    //console.log(this.paciente);
  }
  listaPacienteEx(id: any){
    let i;
    for(i=0; i<this.listaDoPaciente.length; i++){
      if(this.listaDoPaciente[i].id==id){
        
        return true;
      }
    }
    // console.log("nem encontrei véi");
    // console.log("id paciente", this.listaDoPaciente[i-1].id);
    // console.log("id", id);
    return false;
  }
}