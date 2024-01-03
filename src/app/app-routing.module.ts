import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarCategoriasComponent } from './components/categorias/adicionar-categorias/adicionar-categorias.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdicionarServicoComponent } from './components/servico/adicionar-servico/adicionar-servico.component';
import { EditarServicoComponent } from './components/servico/editar-servico/editar-servico.component';
import { ListarServicosComponent } from './components/servico/listar-servicos/listar-servicos.component';
import { AdicionarUsuarioComponent } from './components/usuario/adicionar-usuario/adicionar-usuario.component';
import { authGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'adicionarusuario', component: AdicionarUsuarioComponent },
  { path: 'home', component: HomeComponent, canActivate:[authGuard]},
  { path: 'listarcategorias', component: ListarCategoriasComponent, canActivate:[authGuard]},
  { path: 'adicionarcategorias', component: AdicionarCategoriasComponent, canActivate:[authGuard] },
  { path: 'categorias/excluircategorias/:id', component: ExcluirCategoriaComponent, canActivate:[authGuard] },
  { path: 'categorias/editarcategorias/:id', component: EditarCategoriaComponent, canActivate:[authGuard] },
  { path: 'listarservicos', component: ListarServicosComponent, canActivate:[authGuard] },
  { path: 'adicionarservicos', component: AdicionarServicoComponent, canActivate:[authGuard] },
  { path: 'servicos/editarservicos/:id', component: EditarServicoComponent, canActivate:[authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
