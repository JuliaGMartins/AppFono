import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-ftab3',
  templateUrl: 'ftab3.page.html',
  styleUrls: ['ftab3.page.scss']
})
export class FTab3Page {
  private loading: any;
  public userRegister: User = {};
  private nome = '';
  private exameimagens = '';
  private diagnostico = '';
  private medico = '';
  private telmedico = '';
  private encaminhamento = '';
  private telencaminhamento = '';
  private medicamentos = '';
  private isfono = false;
  public userProfile: any = {};
  public uid;


  constructor(private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController,
    private afa: AngularFireAuth,
    public firestore: AngularFirestore,
    private userservice: UserService) {

     }

  ionViewWillEnter() {
    this.uid = firebase.auth().currentUser.uid
    this.userservice.getUserProfile().get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        this.userProfile.pacientes = [];
        this.userProfile.paciente.forEach(element => {
          firebase.firestore().doc(`/contas/${element}`).get().then(paciente => {
              let pacObj = {
                'id': paciente.id,
                'data': paciente.data()
              };
            this.userProfile.pacientes.push(pacObj.id);
          });
        });
      });
  }

  async cadastro() {
    await this.presentLoading();
    try {
      this.afa.auth.createUserWithEmailAndPassword(this.userRegister.email, this.userRegister.password)
        .then(data => {
          this.CreateRecord(data.user.uid, this.isfono, this.nome, this.exameimagens, this.diagnostico, this.medico, this.telmedico, this.encaminhamento, this.telencaminhamento, this.medicamentos);
        })
        .then(() => {
          this.afa.auth.currentUser.sendEmailVerification();
        })
    } catch (error) {
      console.error(error);
      this.presentToast("Erro ao cadastrar!");
    } finally {
      this.loading.dismiss();
      this.authService.logout();
    }
  }

  CreateRecord(id_uid, isfono, nome, exameimagens, diagnostico, medico, telmedico, encaminhamento, telencaminhamento, medicamentos) {
    this.CreateFono(id_uid)
    return this.firestore.doc(`contas/${id_uid}`).set({
      id_uid,
      nome,
      isfono,
      exameimagens,
      diagnostico,
      medico,
      telmedico,
      encaminhamento,
      telencaminhamento,
      medicamentos,
    })
  }

  CreateFono(id_uid) {
    this.userProfile.pacientes.push(id_uid);
    console.log("paciente add " + this.userProfile.pacientes);
    this.firestore.collection(`contas`).doc(this.uid).update({
      paciente: this.userProfile.pacientes,
    })
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}

