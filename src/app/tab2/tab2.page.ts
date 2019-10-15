import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { FonoaudiologoService } from '../services/fonoaudiologo.service';
import { Paciente } from '../interfaces/paciente';
import { Fonoaudiologo } from '../interfaces/fonoaudiologo';

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

  constructor(private PacienteService: PacienteService, private FonoaudiologoService: FonoaudiologoService) {
    this.pacienteSubscription = this.PacienteService.getPacientes().subscribe(data => {
      this.paciente = data;
    })
    this.fonoaudiologoSubscription = this.FonoaudiologoService.getFono().subscribe(data => {
      this.fonoaudiologo = data;
    })}

    ngOnDestroy(){
      this.pacienteSubscription.unsubscribe();
      this.fonoaudiologoSubscription.unsubscribe();
    }
}
