import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: Users = {};
  private loading: any;
  
  constructor(private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private user:UserService) {

     }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      // console.error(error);
      let message: string;
      switch (error.code) {
        case 'auth/invalid-email':
          message = "Email incorreto ou usuário não cadastrado!";
          break;
        case 'auth/user-not-found':
          message = "Email incorreto ou usuário não cadastrado!";
          break;
        case 'auth/wrong-password':
          message = "Senha incorreta!";
          break;
        default:
          message = "Erro ao logar!";
          break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  ngOnInit() {
    
  }
}