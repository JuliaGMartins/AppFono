import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';
import {ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
  public fexercicios: any;
  public detector: ChangeDetectorRef;
  public listaArray: any[];
  public userProfile: any;
  public idp: any;

  constructor(private userservice: UserService, private d: ChangeDetectorRef, private router: Router) {
    this.listaEx = [];
    this.listaDoPaciente = new Set();
    this.detector = d;
    this.listaArray = [];
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
    this.idp = FexerciciosPacienteService.id;
    if(this.paciente.exercicios != null){
      this.paciente.exercicios.forEach(element => {
        this.listaDoPaciente.add(element);
      });
    }
    this.paciente = FexerciciosPacienteService.paciente;
    firebase.firestore().collection(`exercicios`).get().then(ex =>{
      ex.forEach(exercicio =>{
        let exObj = {
          'id': exercicio.id,
          'data': exercicio.data()
        };
        this.listaEx.push(exObj);
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
    //console.log("paciente exercicios id", this.paciente.exercicios);
    //console.log("paciente exercicios completo!", this.paciente.exer);

    
    //console.log(this.paciente);
  }
  listaPacienteEx(id: any){
    //for(i=0; i<this.listaDoPaciente.length; i++){
      //console.log(this.listaDoPaciente[i], "=========", id);
    for(let ex of this.listaDoPaciente.values()){
      if(ex==id){
        return true;
      }
    }
    return false;
  }

  MudaListaDoPaciente(remove: boolean, id: any){
    if(remove){
      this.listaDoPaciente.delete(id);
    }else{
      this.listaDoPaciente.add(id);
    }
  }
  Salvar(){
    this.listaDoPaciente.forEach(s => this.listaArray.push(s));
    firebase.firestore().collection(`contas`).doc(this.idp).update({
      exercicios: this.listaArray
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  //IDEIA PARA ATUALIZAR A LISTA QUE DEU TERRIVELMENTE ERRADO
    FexerciciosPacienteService.paciente.exercicios = this.listaArray;
    this.router.navigate(['fpaciente']);
  }
}