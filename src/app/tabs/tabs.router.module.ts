import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'tabs/tab1', pathMatch: 'full' },
  {
      path: 'tabs',
      component: TabsPage,
      children: [
      { path: 'tab1',
        children: [{path: '',loadChildren: () =>import('../tab1/tab1.module').then(m => m.Tab1PageModule)}]
      },
      {
        path: 'tab2',
        children: [{path: '',loadChildren: () =>import('../tab2/tab2.module').then(m => m.Tab2PageModule)}]
      },
      {
        path: 'tab3',
        children: [{path: '',loadChildren: () =>import('../tab3/tab3.module').then(m => m.Tab3PageModule)}]
=======
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
>>>>>>> 17cee150fb7b9d21a74c5f0b653f047970b3da1d
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
