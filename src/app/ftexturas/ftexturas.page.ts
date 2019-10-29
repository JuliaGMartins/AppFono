import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { ExerciciosService } from '../services/exercicios.service';

@Component({
  selector: 'app-ftexturas',
  templateUrl: './ftexturas.page.html',
  styleUrls: ['./ftexturas.page.scss'],
})
export class FtexturasPage implements OnInit {
  public listaTex: any[];
  public paciente: any;

  constructor() { }
  ionViewWillEnter() {
    this.listaTex = [];
    firebase.firestore().collection(`texturas`).get().then(ex =>{
      ex.forEach(texturas =>{
        this.listaTex.push(texturas.data());
      });
    });
    this.paciente = ExerciciosService.paciente;
  }
  ngOnInit() {
  }

}
