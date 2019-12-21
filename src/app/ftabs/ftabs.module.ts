import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FTabsPageRoutingModule } from './ftabs.router.module';
import { FTabsPage } from './ftabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FTabsPageRoutingModule
  ],
  declarations: [FTabsPage]
})
export class FTabsPageModule {}