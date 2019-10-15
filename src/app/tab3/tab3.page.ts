import { Component } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { Subscription } from 'rxjs';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private pacientes = new Array<Paciente>();
  private pacienteSubscription: Subscription;

  constructor(private pacienteService: PacienteService) {
    this.pacienteSubscription = this.pacienteService.getPaciente().subscribe(data => {
      this.pacientes = data;
    });
  }

  ngOnDestroy(){
    this.pacienteSubscription.unsubscribe();
  }


}
