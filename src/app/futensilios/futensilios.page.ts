import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { ExerciciosService } from '../services/exercicios.service';

@Component({
  selector: 'app-futensilios',
  templateUrl: './futensilios.page.html',
  styleUrls: ['./futensilios.page.scss'],
})
export class FutensiliosPage implements OnInit {
  public listaUt: any[];
  public paciente: any;

  constructor() { }

  ionViewWillEnter() {
    this.listaUt = [];
    firebase.firestore().collection(`utensilios`).get().then(ex =>{
      ex.forEach(utensilios =>{
        this.listaUt.push(utensilios.data());
      });
    });
    this.paciente = ExerciciosService.paciente;
  }

  ngOnInit() {
  }

}
