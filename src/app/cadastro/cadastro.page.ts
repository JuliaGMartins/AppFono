import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  
  private loading: any;
  public userRegister: User = {};
  private nome: String;
  private exercicios: any={};
  private texturas: any={};
  private utensilios: any={};
  private isfono: boolean = false;

  constructor(private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController,) { }

  ngOnInit() {
  }

  async cadastro(){
    await this.presentLoading();
    try{
      this.authService.register(this.userRegister);
      //this.CreateRecord();
    } catch (error){
      console.error(error);
      this.presentToast("Erro ao cadastrar!");
    } finally{
      this.loading.dismiss();
    }
  }

  /*CreateRecord() {
    let record = {};
    record['nome'] = this.nome;
    record['exercicios'] = this.exercicios;
    record['texturas'] = this.texturas;
    record['utensilios'] = this.utensilios;
    record['isfono'] = this.isfono;
    this.crudService.createPaciente(record, this.exercicios).then(resp => {

      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }*/

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
