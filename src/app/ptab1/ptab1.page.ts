import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ptab1',
  templateUrl: 'ptab1.page.html',
  styleUrls: ['ptab1.page.scss']
})
export class PTab1Page {

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
    this.router.navigate(['cadastro']);
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
