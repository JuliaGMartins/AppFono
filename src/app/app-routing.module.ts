import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '', redirectTo: 'tabs', pathMatch: 'full'},
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'opcoes', loadChildren: './opcoes/opcoes.module#OpcoesPageModule', canActivate: [AuthGuard] },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule', canActivate: [AuthGuard] },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate: [AuthGuard] },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
