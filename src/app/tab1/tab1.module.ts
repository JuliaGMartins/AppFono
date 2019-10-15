import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AjudaPage } from 'src/app/ajuda/ajuda.page';
import { OpcoesPage } from 'src/app/opcoes/opcoes.page';
import { PerfilPage } from 'src/app/perfil/perfil.page';
import { Router} from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  constructor(private router: Router){}
  items = [
    { title: 'Meu Perfil', component: PerfilPage},
    { title: 'Opções', component: OpcoesPage},
    { title: 'Ajuda', component: AjudaPage},    
  ];

itemSelected(page) 
{
  this.router.navigate(['/ajuda']);
}
}
