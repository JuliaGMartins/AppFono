import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { Alert } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth, private alert: Alert) { }

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
   }
   
  logout() { 
    return this.afa.auth.signOut();
  }

  getAuth() { 
    return this.afa.auth;
  }

  register(user: User){
    this.afa.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(() => {
      this.afa.auth.currentUser.sendEmailVerification();
      })
  }    
}
