import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase/app';
import { ExerciciosService } from '../services/exercicios.service';
import { Router } from '@angular/router';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';

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

  constructor(private d: ChangeDetectorRef, private router: Router) { 
    this.listaUt = [];
    this.listaUtPaciente = new Set();
    this.detector = d;
  }
  ionViewWillEnter() {
    this.paciente = FexerciciosPacienteService.paciente;
    this.paciente.texturas.forEach(element => {
        this.listaUtPaciente.add(element.id.trim());
      });
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
    this.router.navigate(['fpaciente']);
  }
}