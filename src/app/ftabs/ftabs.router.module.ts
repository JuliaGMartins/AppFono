import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FTabsPage } from './ftabs.page';

const routes: Routes = [
  {
    path: 'ftabs',
    component: FTabsPage,
    children: [
      {
        path: 'ftab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ftab1/ftab1.module').then(m => m.FTab1PageModule)
          }
        ]
      },
      {
        path: 'ftab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ftab2/ftab2.module').then(m => m.FTab2PageModule)
          }
        ]
      },
      {
        path: 'ftab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ftab3/ftab3.module').then(m => m.FTab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/ftabs/ftab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ftabs/ftab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FTabsPageRoutingModule {}
