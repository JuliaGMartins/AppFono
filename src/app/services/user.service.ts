import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable()
export class UserService {

  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;
  
  constructor() { 
  }

  getUser(){
    firebase.auth().onAuthStateChanged(user => 
      { if (user) 
        {
          this.userProfile = firebase.firestore().doc(`/contas/${user.uid}`); } }); 
          this.currentUser = firebase.auth().currentUser; 
          this.userProfile = firebase.firestore().doc(`/contas/${this.currentUser.uid}`);
          
      return this.userProfile;
  }

  getUserProfile(): firebase.firestore.DocumentReference {
    return this.getUser();
  }
}
