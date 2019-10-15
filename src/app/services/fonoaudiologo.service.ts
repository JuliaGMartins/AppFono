import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Fonoaudiologo } from '../interfaces/fonoaudiologo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FonoaudiologoService {
  private fonoCollection: AngularFirestoreCollection<Fonoaudiologo>;
  constructor(private afs: AngularFirestore) {
    this.fonoCollection = this.afs.collection<Fonoaudiologo>('fonoaudiologo');
}
  getFono(){
    return this.fonoCollection.snapshotChanges().pipe(
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
  }}
