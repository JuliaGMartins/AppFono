import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private exercicios = new Array();
  public userProfile: any = {};

  constructor(private userservice: UserService) { }

  ionViewWillEnter() {
    this.userservice
      .getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
      });
    this.exercicios = this.userProfile.exercicio;
  }

  ngOnDestroy() {

  }

  concluido() {

  }

}

