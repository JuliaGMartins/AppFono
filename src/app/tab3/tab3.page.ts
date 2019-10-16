import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private texturas = new Array();
  public userProfile: any = {};

  constructor(private userservice: UserService) { }

  ionViewWillEnter() {
    this.userservice
      .getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
      });
    this.texturas = this.userProfile.textura;
  }

  ngOnDestroy() {

  }


}
