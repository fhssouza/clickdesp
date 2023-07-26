import { EditarCategoriaComponent } from './componentes/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './componentes/categorias/excluir-categoria/excluir-categoria.component';
import { AdicionarCategoriasComponent } from './componentes/categorias/adicionar-categorias/adicionar-categorias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCategoriasComponent } from './componentes/categorias/listar-categorias/listar-categorias.component';

const routes: Routes = [
  { path: 'listarcategorias', component: ListarCategoriasComponent },
  { path: 'adicionarcategorias', component: AdicionarCategoriasComponent },
  { path: 'categorias/excluircategorias/:id', component: ExcluirCategoriaComponent },
  { path: 'categorias/editarcategorias/:id', component: EditarCategoriaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
