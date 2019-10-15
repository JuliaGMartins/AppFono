import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.page.html',
  styleUrls: ['./opcoes.page.scss'],
})
export class OpcoesPage implements OnInit {

  constructor(private menuCtrl: MenuController ,private router: Router) { }

  ajuda(){
    this.router.navigate(['ajuda']);
}

  ngOnInit() {
  }

}
