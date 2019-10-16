import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '', redirectTo: 'tabs', pathMatch: 'full'},
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'meu-perfil', loadChildren: './meu-perfil/meu-perfil.module#MeuPerfilPageModule' },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'opcoes', loadChildren: './opcoes/opcoes.module#OpcoesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
