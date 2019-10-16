import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: Users) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
   }
   
  logout() { 
    return this.afa.auth.signOut();
  }

  getAuth() { 
    return this.afa.auth;
  }
}
