import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private data_uid;

  constructor(private afa: AngularFireAuth) { }

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
   }
   
  logout() { 
    return this.afa.auth.signOut();
  }

  getAuth() { 
    return this.afa.auth;
  }

  register(User: User){
    this.afa.auth.createUserWithEmailAndPassword(User.email, User.password)
    .then(data=>{
      return data.user.uid
    })
    .then(() => {
      this.afa.auth.currentUser.sendEmailVerification();
      })    
  }    
}
