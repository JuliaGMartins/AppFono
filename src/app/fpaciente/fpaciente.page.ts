import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FexerciciosPacienteService} from '../services/fexercicios-paciente.service';
import { Router } from '@angular/router';
//import { Paciente } from '../services/fexercicios-paciente.service';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-fpaciente',
  templateUrl: './fpaciente.page.html',
  styleUrls: ['./fpaciente.page.scss'],
})
export class FpacientePage implements OnInit {

  public userProfile: any;
  public pacienteProfileID: any;
  public pacienteProfile: any;
  public exercicioProfileID: any;
  public exercicioProfile: any;
  public listaEx: any;
  public paciente: any;


  constructor(private router: Router) {}
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.paciente = FexerciciosPacienteService.paciente;
    this.listaEx = [];
    // firebase.firestore().collection(`exercicios`).get().then(ex =>{
    //   ex.forEach(exercicio =>{
    //     this.listaEx.push(exercicio.data());

    
    //   });
    // });
      //console.log(this.paciente);
  }

  fexercicios(paciente: any){
    FexerciciosPacienteService.paciente = paciente;
    this.router.navigate(['fexercicios']);
}
  ftexturas(paciente: any){
    FexerciciosPacienteService.paciente = paciente;
    this.router.navigate(['ftexturas']);
}
  futensilios(paciente: any){
    FexerciciosPacienteService.paciente = paciente;
    this.router.navigate(['futensilios']);
}


}
