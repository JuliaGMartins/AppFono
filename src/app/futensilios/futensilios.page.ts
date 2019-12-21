import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase/app';
import { ExerciciosService } from '../services/exercicios.service';
import { Router } from '@angular/router';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-futensilios',
  templateUrl: './futensilios.page.html',
  styleUrls: ['./futensilios.page.scss'],
})
export class FutensiliosPage implements OnInit {
  public listaUt: any;
  public paciente: any;
  public listaUtPaciente: any;
  public fexercicios: any;
  public detector: ChangeDetectorRef;
  public listaArray: any;
  public id: any;

  constructor(private d: ChangeDetectorRef, private router: Router) { 
    this.listaUt = [];
    this.listaUtPaciente = new Set();
    this.detector = d;
    this.listaArray = [];
  }
  ionViewWillEnter() {
    this.paciente = FexerciciosPacienteService.paciente;
    this.id = FexerciciosPacienteService.id;

    if(this.paciente.exercicios != null){
      this.paciente.utensilios.forEach(element => {
      this.listaUtPaciente.add(element);
      });
    }
    firebase.firestore().collection(`utensilios`).get().then(ut =>{
      ut.forEach(utensilio =>{
        let exObj = {
          'id': utensilio.id,
          'data': utensilio.data()
        };
        this.listaUt.push(exObj);
      });
    });
    
  }
  ngOnInit() {
  }

  listaPacienteUt(id: any){
    for(let ex of this.listaUtPaciente.values()){
      if(ex==id){
        return true;
      }
    }
    return false;
  }

  MudaListaDoPaciente(remove: boolean, id: any){
    if(remove){
      this.listaUtPaciente.delete(id);
    }else{
      this.listaUtPaciente.add(id);
    }
  }

  Salvar(){
    this.listaUtPaciente.forEach(s => this.listaArray.push(s));
    firebase.firestore().collection(`contas`).doc(FexerciciosPacienteService.id).update({
      utensilios: this.listaArray
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
    FexerciciosPacienteService.paciente.utensilios = this.listaArray;
    this.router.navigate(['fpaciente']);
  }
}