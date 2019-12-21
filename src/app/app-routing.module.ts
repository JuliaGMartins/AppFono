import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  //{ path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: '', redirectTo: 'ptabs', pathMatch: 'full'},
  { path: 'app', loadChildren: './ptabs/ptabs.module#PTabsPageModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'ftabs', pathMatch: 'full'},
  { path: 'app', loadChildren: './ftabs/ftabs.module#FTabsPageModule', canActivate: [AuthGuard] },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate: [AuthGuard] },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule', canActivate: [AuthGuard] },
  { path: 'fpaciente', loadChildren: './fpaciente/fpaciente.module#FpacientePageModule', canActivate: [AuthGuard] },
  { path: 'ftexturas', loadChildren: './ftexturas/ftexturas.module#FtexturasPageModule', canActivate: [AuthGuard] },
  { path: 'futensilios', loadChildren: './futensilios/futensilios.module#FutensiliosPageModule', canActivate: [AuthGuard] },
  { path: 'fexercicios', loadChildren: './fexercicios/fexercicios.module#FexerciciosPageModule', canActivate: [AuthGuard] },
  { path: 'transicao', loadChildren: './transicao/transicao.module#TransicaoPageModule', canActivate: [AuthGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
