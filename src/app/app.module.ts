import { CommonModule, CurrencyPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

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
import { OrdemservicoListComponent } from './components/ordem-servico/ordemservico-list/ordemservico-list.component';
import { ProprietarioCreateComponent } from './components/proprietario/proprietario-create/proprietario-create.component';
import { ProprietarioDeleteComponent } from './components/proprietario/proprietario-delete/proprietario-delete.component';
import { ProprietarioListComponent } from './components/proprietario/proprietario-list/proprietario-list.component';
import { ProprietarioUpdateComponent } from './components/proprietario/proprietario-update/proprietario-update.component';
import { AdicionarServicoComponent } from './components/servico/adicionar-servico/adicionar-servico.component';
import { EditarServicoComponent } from './components/servico/editar-servico/editar-servico.component';
import { ExcluirServicoComponent } from './components/servico/excluir-servico/excluir-servico.component';
import { ListarServicosComponent } from './components/servico/listar-servicos/listar-servicos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdicionarUsuarioComponent } from './components/usuario/adicionar-usuario/adicionar-usuario.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';
import { VeiculoListComponent } from './components/veiculo/veiculo-list/veiculo-list.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';
import { JwtInterceptor } from './security/jwt.interceptor';
import { CpfcnpjMaskDirective } from './shared/directives/cpfcnpj-mask.directive';
import { TelefoneMaskDirective } from './shared/directives/telefone-mask.directive';
import { CpfCnpjPipe } from './shared/pipe/cpf-cnpj.pipe';
import { PhonePipe } from './shared/pipe/phone.pipe';
import { OrdemservicoCreateComponent } from './components/ordem-servico/ordemservico-create/ordemservico-create.component';
import { OrdemservicoUpdateComponent } from './components/ordem-servico/ordemservico-update/ordemservico-update.component';
import { OrdemservicoCancelComponent } from './components/ordem-servico/ordemservico-cancel/ordemservico-cancel.component';
import { OrdemservicoFinishComponent } from './components/ordem-servico/ordemservico-finish/ordemservico-finish.component';
import { TiposervicoListComponent } from './components/tipo-servico/tiposervico-list/tiposervico-list.component';
import { TiposervicoCreateComponent } from './components/tipo-servico/tiposervico-create/tiposervico-create.component';
import { TiposervicoUpdateComponent } from './components/tipo-servico/tiposervico-update/tiposervico-update.component';
import { TiposervicoDeleteComponent } from './components/tipo-servico/tiposervico-delete/tiposervico-delete.component';
import { ProprietarioAddressComponent } from './components/proprietario/proprietario-address/proprietario-address.component';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { RequestResetPasswordComponent } from './components/usuario/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/usuario/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import {NgChartsModule} from "ng2-charts";
import { LicenciamentoListComponent } from './components/licenciamento/licenciamento-list/licenciamento-list.component';
import { LicenciamentoCreateComponent } from './components/licenciamento/licenciamento-create/licenciamento-create.component';
import { LicenciamentoUpdateComponent } from './components/licenciamento/licenciamento-update/licenciamento-update.component';
import { LicenciamentoDeleteComponent } from './components/licenciamento/licenciamento-delete/licenciamento-delete.component';


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
    PhonePipe,
    ProprietarioCreateComponent,
    TelefoneMaskDirective,
    CpfcnpjMaskDirective,
    ProprietarioUpdateComponent,
    ProprietarioDeleteComponent,
    VeiculoListComponent,
    VeiculoCreateComponent,
    VeiculoUpdateComponent,
    VeiculoDeleteComponent,
    OrdemservicoListComponent,
    SidebarComponent,
    OrdemservicoCreateComponent,
    OrdemservicoUpdateComponent,
    OrdemservicoCancelComponent,
    OrdemservicoFinishComponent,
    TiposervicoListComponent,
    TiposervicoCreateComponent,
    TiposervicoUpdateComponent,
    TiposervicoDeleteComponent,
    ProprietarioAddressComponent,
    RequestResetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    LicenciamentoListComponent,
    LicenciamentoCreateComponent,
    LicenciamentoUpdateComponent,
    LicenciamentoDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CurrencyPipe,
    NgxViacepModule,
    NgChartsModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxPaginationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideNgxMask(),
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
