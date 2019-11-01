import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';
import { Subscription } from 'rxjs';
import { fexerciciosService } from '../services/fexercicios.service';
import { fexercicios } from 'src/app/interfaces/fexercicios';
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
  private listaPacienteSubscription: Subscription;
  private fexerciciosService: fexerciciosService;
  public fexercicios: any;

  constructor() {
    this.listaEx = [];
    this.listaDoPaciente = [];
    //this.paciente = null;
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    // this.listaPacienteSubscription = this.fexerciciosService.getExercicios().subscribe(data => {
    //   this.fexercicios = data;
    //   });
    //   console.log(this.fexercicios);
    this.paciente = FexerciciosPacienteService.paciente;
    this.paciente.exercicios.forEach(element => {
        this.listaDoPaciente.push(element.id.trim());
      });
    this.paciente = FexerciciosPacienteService.paciente;
    firebase.firestore().collection(`exercicios`).get().then(ex =>{
      ex.forEach(exercicio =>{
        let exObj = {
          'id': exercicio.id,
          'data': exercicio.data()
        };
        this.listaEx.push(exObj);
        // this.listaEx.push(exercicio.id);
        
      });
    });

        this.paciente.exer = [];
        // this.paciente.exercicios.forEach(element => {
        //   console.log(element.id);
        //   firebase.firestore().doc('exercicios/'+element.id).get().then(exer => {
        //    // console.log(exer.data());
        //     //console.log(exer.id)
        //     this.paciente.exer.push(exer.data());
        //   });
        // });
        this.paciente.exercicios.forEach(element => {
        firebase.firestore().collection("exercicios").doc(element.id)
        .get()
        .then((doc) => {
         // console.log(doc.id, " => ", doc.data());
            
        })
        .catch(function(error) {
            //console.log("Error getting documents: ", error);
        });

      });
    //console.log("paciente exercicios id", this.paciente.exercicios);
    //console.log("paciente exercicios completo!", this.paciente.exer);

    
    //console.log(this.paciente);
  }
  listaPacienteEx(id: any){
    let i;
    for(i=0; i<this.listaDoPaciente.length; i++){
      //console.log(this.listaDoPaciente[i], "=========", id);
      if(this.listaDoPaciente[i]==id){
        return true;
      }
    }
    return false;
  }
}