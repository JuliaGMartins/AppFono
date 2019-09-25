import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeuPerfilPage } from './meu-perfil.page';

const routes: Routes = [
  {
    path: 'MeuPerfilPage',
    component: MeuPerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeuPerfilPage]
})
export class MeuPerfilPageModule {}
