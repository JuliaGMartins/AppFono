import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};
  private loading: any;
  public userProfile: any;
  
  constructor(private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private userservice:UserService) {

     }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);

      this.userservice
      .getUserProfile().get()
      .then( userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.data();
      alert(this.userProfile.isfono);
      /*if (!this.userProfile.isfono){
        this.router.navigateByUrl('app/ptabs/ptab1');
      }else{
        this.router.navigateByUrl('app/ftabs/ftab1');
      }*/
      
    });
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
