import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-ptab2',
  templateUrl: 'ptab2.page.html',
  styleUrls: ['ptab2.page.scss']
})
export class PTab2Page {
  public userProfile: any = {};
  
  constructor(private userservice: UserService) { }

  ionViewWillEnter() {
    this.userservice
      .getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        this.userProfile.exercicio = [];
        this.userProfile.exercicios.forEach(element => {
          firebase.firestore().doc(`/exercicios/${element}`).get().then(exercicios => {
            this.userProfile.exercicio.push(exercicios.data());
            console.log(this.userProfile)
          });
        // this.userProfile.exercicios.forEach(element => {
        //   firebase.firestore().doc(`/exercicios/${element}`).get().then(exercicios => {
        //       let pacObj = {
        //         'id': exercicios.id,
        //         'data': exercicios.data()
        //       };
        //       this.userProfile.exercicio.push(pacObj);
        //       console.log(this.userProfile)
        // });
      });
  })}
  

ngOnDestroy() {

}

concluido() {

}

}

