import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Paciente } from '../interfaces/paciente';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
 
  
  private pacienteCollection: AngularFirestoreCollection<Paciente>;
  constructor(private afs: AngularFirestore) {
    this.pacienteCollection = this.afs.collection<Paciente>('pacientes');
  }

  getPaciente() {
    return this.pacienteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return data;
        });
      })
    )
  }
}

