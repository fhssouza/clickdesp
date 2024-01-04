import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarCategoriasComponent } from './components/categorias/adicionar-categorias/adicionar-categorias.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdicionarServicoComponent } from './components/servico/adicionar-servico/adicionar-servico.component';
import { EditarServicoComponent } from './components/servico/editar-servico/editar-servico.component';
import { ExcluirServicoComponent } from './components/servico/excluir-servico/excluir-servico.component';
import { ListarServicosComponent } from './components/servico/listar-servicos/listar-servicos.component';
import { AdicionarUsuarioComponent } from './components/usuario/adicionar-usuario/adicionar-usuario.component';
import { JwtInterceptor } from './security/jwt.interceptor';
import { ProprietarioListComponent } from './components/proprietario/proprietario-list/proprietario-list.component';
import { CpfCnpjPipe } from './shared/pipe/cpf-cnpj.pipe';
import { PhonePipe } from './shared/pipe/phone.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListarCategoriasComponent,
    AdicionarCategoriasComponent,
    ExcluirCategoriaComponent,
    EditarCategoriaComponent,
    ListarServicosComponent,
    LoginComponent,
    HomeComponent,
    AdicionarUsuarioComponent,
    AdicionarServicoComponent,
    EditarServicoComponent,
    ExcluirServicoComponent,
    ProprietarioListComponent,
    CpfCnpjPipe,
    PhonePipe

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
