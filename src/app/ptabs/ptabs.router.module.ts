import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PTabsPage } from './ptabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'ptabs/ptab1', pathMatch: 'full' },
  {
      path: 'ptabs',
      component: PTabsPage,
      children: [
      { path: 'ptab1',
        children: [{path: '',loadChildren: () =>import('../ptab1/ptab1.module').then(m => m.PTab1PageModule)}]
      },
      {
        path: 'ptab2',
        children: [{path: '',loadChildren: () =>import('../ptab2/ptab2.module').then(m => m.PTab2PageModule)}]
      },
      {
        path: 'ptab3',
        children: [{path: '',loadChildren: () =>import('../ptab3/ptab3.module').then(m => m.PTab3PageModule)}]
      },
      {
        path: '',
        redirectTo: '/ptabs/ptab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ptabs/ptab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PTabsPageRoutingModule {}
