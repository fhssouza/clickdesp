import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarCategoriasComponent } from './components/categorias/adicionar-categorias/adicionar-categorias.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { ListarServicosComponent } from './components/servico/listar-servicos/listar-servicos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listarcategorias', component: ListarCategoriasComponent },
  { path: 'adicionarcategorias', component: AdicionarCategoriasComponent },
  { path: 'categorias/excluircategorias/:id', component: ExcluirCategoriaComponent },
  { path: 'categorias/editarcategorias/:id', component: EditarCategoriaComponent },
  { path: 'listarservicos', component: ListarServicosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
