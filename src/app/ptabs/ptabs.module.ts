import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PTabsPageRoutingModule } from './ptabs.router.module';
import { PTabsPage } from './ptabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PTabsPageRoutingModule
  ],
  declarations: [PTabsPage]
})
export class PTabsPageModule {}
