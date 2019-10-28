import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'ptabs', pathMatch: 'full'},
  { path: 'app', loadChildren: './ptabs/ptabs.module#PTabsPageModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'ftabs', pathMatch: 'full'},
  { path: 'app', loadChildren: './ftabs/ftabs.module#FTabsPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'opcoes', loadChildren: './opcoes/opcoes.module#OpcoesPageModule', canActivate: [AuthGuard] },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule', canActivate: [AuthGuard] },  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
