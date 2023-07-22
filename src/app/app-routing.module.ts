import { AdicionarCategoriasComponent } from './componentes/categorias/adicionar-categorias/adicionar-categorias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCategoriasComponent } from './componentes/categorias/listar-categorias/listar-categorias.component';

const routes: Routes = [
  { path: 'listarcategorias', component: ListarCategoriasComponent },
  { path: 'adicionarcategorias', component: AdicionarCategoriasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
