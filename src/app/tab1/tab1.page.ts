import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public userProfile: any;
  
    constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private authService: AuthService,
    private userservice: UserService,
    ){ };
   

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    }
  }

  irperfil() {
    this.router.navigate(['perfil']);
  }

  irajuda() {
    this.router.navigate(['ajuda']);
  }
  iropcoes() {
    this.router.navigate(['opcoes']);
  }

  ionViewWillEnter(){
    this.userservice
    .getUserProfile().get()
    .then( userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.data();
    });
    console.log(this.userProfile)
  }

  ngOnDestroy(){
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
