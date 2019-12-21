import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { fexercicios } from '../interfaces/fexercicios';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class fexerciciosService {
  private fexerciciosCollection: AngularFirestoreCollection<fexercicios>;

  constructor(private afs: AngularFirestore) {
    this.fexerciciosCollection = this.afs.collection<fexercicios>('exercicios');
  }

  getExercicios() {
    return this.fexerciciosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addExercicio(fexercicios: fexercicios) {
    return this.fexerciciosCollection.add(fexercicios);
  }

  getProduct(id: string) {
    return this.fexerciciosCollection.doc<fexercicios>(id).valueChanges();
  }

  updateProduct(id: string, fexercicios: fexercicios) {
    return this.fexerciciosCollection.doc<fexercicios>(id).update(fexercicios);
  }

  deleteProduct(id: string) {
    return this.fexerciciosCollection.doc(id).delete();
  }
}