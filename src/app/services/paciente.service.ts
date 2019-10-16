import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacienteCollection: AngularFirestoreCollection<Paciente>;
  constructor(private afs: AngularFirestore) {
    this.pacienteCollection = this.afs.collection<Paciente>('paciente');
  }
  getPacientes(){
    return this.pacienteCollection.snapshotChanges().pipe(
      //é necessário utilizar o snapshotChanges() pois precisamos recuperar o id também e não só os valores da tabela
      //se não poderia ser utilizado somente o valueChanges()
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data(); //pega os atributos do paciente, assim como o valuechanges
          const id = a.payload.doc.id; //pega o id do paciente

          return {id, ...data};
        })
      })
    )
  }
  getPacienteID(id: string){
    return this.pacienteCollection.doc<Paciente>(id).valueChanges();
  }

  getPacienteExercicios(exercicios: Paciente){

  }
  addPaciente(paciente: Paciente){

  }
  removePaciente(id: Paciente){

  }

}
