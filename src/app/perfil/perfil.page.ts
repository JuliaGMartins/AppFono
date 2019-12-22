import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  private emailUser;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  redefinirSenha() {
    try {
      this.emailUser = firebase.auth().currentUser.email
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(this.emailUser)
      this.presentToast("Email para redefinição de senha enviado!");
    }
    catch (error) {
      this.presentToast("Erro!");
    };
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
