import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { FonoaudiologoService } from '../services/fonoaudiologo.service';
import { Paciente } from '../interfaces/paciente';
import { Fonoaudiologo } from '../interfaces/fonoaudiologo';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private paciente = new Array<Paciente>();
  private fonoaudiologo = new Array<Fonoaudiologo>();
  private pacienteSubscription: Subscription;
  private fonoaudiologoSubscription: Subscription;
  public userProfile: any;
  public pacienteProfileID: any;
  public pacienteProfile: any;


  constructor(private userservice: UserService, private PacienteService: PacienteService,) {
    this.pacienteSubscription = PacienteService.getPacientes().subscribe(id => {
      this.pacienteProfileID = id;});
  }

  async searchPaciente (id: string) {
      this.pacienteProfile = this.PacienteService.getPacienteID(id);
  }

  ionViewWillEnter() {
    this.userservice
      .getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
      });
    //this.paciente = this.userProfile.paciente;
  }

    ngOnDestroy(){
      this.pacienteSubscription.unsubscribe();
      this.fonoaudiologoSubscription.unsubscribe();
    }
}
