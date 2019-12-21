import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-transicao',
  templateUrl: './transicao.page.html',
  styleUrls: ['./transicao.page.scss'],
})
export class TransicaoPage implements OnInit {

  public userProfile: any;

  constructor(private router: Router,
    private userservice:UserService,
    private authService: AuthService,) { }

  ngOnInit() {
    this.userservice
      .getUserProfile().get()
      .then( userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.data();
      if(this.userProfile.isfono){
        this.router.navigateByUrl("/app/ftabs/ftab1");
      } else {
        this.router.navigateByUrl("/app/ptabs/ptab1");
      }       
      })
  }
  concluir(){
    this.authService.logout();
        this.router.navigate(['login']);
  }
}
