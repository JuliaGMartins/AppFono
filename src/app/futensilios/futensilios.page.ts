import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase/app';
import { ExerciciosService } from '../services/exercicios.service';
import { Router } from '@angular/router';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';
import 'firebase/auth';
import 'firebase/firestore';
import { ToastController } from '@ionic/angular';

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

  constructor(private toastCtrl: ToastController, private d: ChangeDetectorRef, private router: Router) { 
    this.listaUt = [];
    this.listaUtPaciente = new Set();
    this.detector = d;
    this.listaArray = [];
  }
  ionViewWillEnter() {
    this.paciente = FexerciciosPacienteService.paciente;
    this.id = FexerciciosPacienteService.id;

    if(this.paciente.utensilios != null){
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
    try{
    this.listaUtPaciente.forEach(s => this.listaArray.push(s));
    firebase.firestore().collection(`contas`).doc(FexerciciosPacienteService.id).update({
      utensilios: this.listaArray
  });
      //console.log("Document successfully written!");
      this.presentToast("Modificações salvas com sucesso!");
  }
  catch(error) {
      console.error("Error writing document: ", error);
      this.presentToast("Erro ao salvar!");
  };
    FexerciciosPacienteService.paciente.utensilios = this.listaArray;
    this.router.navigate(['fpaciente']);
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}