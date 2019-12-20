import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  public userProfile: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userservice: UserService,
  ) { }
  
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user){
          //this.router.navigate(['transicao']);
          if (this.usuario().isfono){
            this.router.navigateByUrl("/app/ftabs/ftab1");
          }else{
            this.router.navigateByUrl("/app/ptabs/ptab1");
          }
        }
        resolve(!user ? true : false);
      })
    })
  }

  usuario(){
    this.userservice
    .getUserProfile().get()
    .then( userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.data();
    });
    return this.userProfile;
  }
}
