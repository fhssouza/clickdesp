import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarCategoriasComponent } from './componentes/categorias/adicionar-categorias/adicionar-categorias.component';
import { CategoriaComponent } from './componentes/categorias/categoria/categoria.component';
import { ListarCategoriasComponent } from './componentes/categorias/listar-categorias/listar-categorias.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ExcluirCategoriaComponent } from './componentes/categorias/excluir-categoria/excluir-categoria.component';
import { EditarCategoriaComponent } from './componentes/categorias/editar-categoria/editar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListarCategoriasComponent,
    AdicionarCategoriasComponent,
    CategoriaComponent,
    ExcluirCategoriaComponent,
    EditarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
