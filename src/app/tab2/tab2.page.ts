import { Component } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { Subscription } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private pacientes = new Array<Paciente>();
  private pacienteSubscription: Subscription;
   
  constructor(private pacienteService: PacienteService, private user:UserService) {
    this.pacienteSubscription = this.pacienteService.getPaciente().subscribe(data => {
      this.pacientes = data;
          });
  } 

  ngOnDestroy(){
    this.pacienteSubscription.unsubscribe();
  }

  concluido(){
    
  }

}
  
