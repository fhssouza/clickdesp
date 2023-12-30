import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarCategoriasComponent } from './components/categorias/adicionar-categorias/adicionar-categorias.component';
import { CategoriaComponent } from './components/categorias/categoria/categoria.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdicionarServicoComponent } from './components/servico/adicionar-servico/adicionar-servico.component';
import { ListarServicosComponent } from './components/servico/listar-servicos/listar-servicos.component';
import { AdicionarUsuarioComponent } from './components/usuario/adicionar-usuario/adicionar-usuario.component';
import { JwtInterceptor } from './security/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListarCategoriasComponent,
    AdicionarCategoriasComponent,
    CategoriaComponent,
    ExcluirCategoriaComponent,
    EditarCategoriaComponent,
    ListarServicosComponent,
    LoginComponent,
    HomeComponent,
    AdicionarUsuarioComponent,
    AdicionarServicoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
