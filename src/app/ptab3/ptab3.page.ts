import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-ptab3',
  templateUrl: 'ptab3.page.html',
  styleUrls: ['ptab3.page.scss']
})
export class PTab3Page {
  public userProfile: any = {};

  constructor(private userservice: UserService) { }

  ionViewWillEnter() {
    this.userservice
      .getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        this.userProfile.textura = [];
        this.userProfile.texturas.forEach(element => {
          firebase.firestore().doc(`/texturas/${element.id}`).get().then(texturas => {
            this.userProfile.textura.push(texturas.data());

        this.userProfile.utensilio = [];
        this.userProfile.utensilios.forEach(element => {
           firebase.firestore().doc(`/utensilios/${element.id}`).get().then(utensilios => {
             this.userProfile.utensilio.push(utensilios.data());
              });
            });
          });
        });
      });
  }

  ngOnDestroy() {

  }


}
