import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase/app';
import { ExerciciosService } from '../services/exercicios.service';
import { Router } from '@angular/router';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-ftexturas',
  templateUrl: './ftexturas.page.html',
  styleUrls: ['./ftexturas.page.scss'],
})
export class FtexturasPage implements OnInit {
  public listaTex: any;
  public paciente: any;
  public listaTexPaciente: any;
  public fexercicios: any;
  public detector: ChangeDetectorRef;
  public listaArray: any;
  public id: any;

  constructor(private d: ChangeDetectorRef, private router: Router) { 
    this.listaTex = [];
    this.listaTexPaciente = new Set();
    this.detector = d;
    this.listaArray = [];
  }
  ionViewWillEnter() {
    this.paciente = FexerciciosPacienteService.paciente;
    this.id = FexerciciosPacienteService.id;
    if(this.paciente.exercicios != null){
      this.paciente.texturas.forEach(element => {
        this.listaTexPaciente.add(element);
      });
    }
    firebase.firestore().collection(`texturas`).get().then(ex =>{
      ex.forEach(textura =>{
        let exObj = {
          'id': textura.id,
          'data': textura.data()
        };
        this.listaTex.push(exObj);
      });
    });
  }
  ngOnInit() {
  }

  listaPacienteTex(id: any){
    for(let ex of this.listaTexPaciente.values()){
      if(ex==id){
        return true;
      }
    }
    return false;
  }

  MudaListaDoPaciente(remove: boolean, id: any){
    if(remove){
      this.listaTexPaciente.delete(id);
    }else{
      this.listaTexPaciente.add(id);
    }
  }
  Salvar(){
    this.listaTexPaciente.forEach(s => this.listaArray.push(s));
    firebase.firestore().collection(`contas`).doc(this.id).update({
      texturas: this.listaArray
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  //IDEIA PARA ATUALIZAR A LISTA QUE DEU TERRIVELMENTE ERRADO
    FexerciciosPacienteService.paciente.texturas = this.listaArray;
    this.router.navigate(['fpaciente']);
  }
}