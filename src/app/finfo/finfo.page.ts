import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { FexerciciosPacienteService } from '../services/fexercicios-paciente.service';

@Component({
  selector: 'app-finfo',
  templateUrl: './finfo.page.html',
  styleUrls: ['./finfo.page.scss'],
})
export class FinfoPage implements OnInit {
  public paciente: any;
  public lista: any;
  public id: any;

  constructor() { }

  ngOnInit() {
    this.paciente = FexerciciosPacienteService.paciente;
    this.id = FexerciciosPacienteService.id;
    console.log("pac"+this.paciente.nome)
  }

  ionViewWillEnter(){
    
    // firebase.firestore().collection(`contas`).doc(this.paciente.id).get().then(ex =>{
    //     let exObj = {
    //       'id': ex.id,
    //       'data': ex.data()
    //     };
    //     this.lista.push(exObj);
    //     console.log("lista"+this.lista)
    //   });
    }
}
