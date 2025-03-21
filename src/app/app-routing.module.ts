import { ProprietarioAddressComponent } from './components/proprietario/proprietario-address/proprietario-address.component';
import { TiposervicoDeleteComponent } from './components/tipo-servico/tiposervico-delete/tiposervico-delete.component';
import { TiposervicoUpdateComponent } from './components/tipo-servico/tiposervico-update/tiposervico-update.component';
import { TiposervicoCreateComponent } from './components/tipo-servico/tiposervico-create/tiposervico-create.component';
import { TiposervicoListComponent } from './components/tipo-servico/tiposervico-list/tiposervico-list.component';
import { OrdemservicoFinishComponent } from './components/ordem-servico/ordemservico-finish/ordemservico-finish.component';
import { OrdemservicoCancelComponent } from './components/ordem-servico/ordemservico-cancel/ordemservico-cancel.component';
import { OrdemservicoUpdateComponent } from './components/ordem-servico/ordemservico-update/ordemservico-update.component';
import { OrdemservicoCreateComponent } from './components/ordem-servico/ordemservico-create/ordemservico-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarCategoriasComponent } from './components/categorias/adicionar-categorias/adicionar-categorias.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
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
import { authGuard } from './security/auth.guard';
import {
  RequestResetPasswordComponent
} from "./components/usuario/request-reset-password/request-reset-password.component";
import {ResetPasswordComponent} from "./components/usuario/reset-password/reset-password.component";
import {DashboardComponent} from "./components/dashboard/dashboard/dashboard.component";

const routes: Routes = [

  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'adicionarusuario', component: AdicionarUsuarioComponent },
  { path: 'request-reset-password', component: RequestResetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  { path: '', component: SidebarComponent, canActivate:[authGuard], children:[
    { path: 'home', component: HomeComponent },

    { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard]},

    { path: 'proprietarios', component: ProprietarioListComponent, canActivate:[authGuard]},
    { path: 'proprietarios/create', component: ProprietarioCreateComponent, canActivate:[authGuard] },
    { path: 'proprietarios/address/:id', component: ProprietarioAddressComponent, canActivate:[authGuard] },
    { path: 'proprietarios/update/:id', component: ProprietarioUpdateComponent, canActivate:[authGuard] },
    { path: 'proprietarios/delete/:id', component: ProprietarioDeleteComponent, canActivate:[authGuard] },

    { path: 'veiculos', component: VeiculoListComponent, canActivate:[authGuard]},
    { path: 'veiculos/create', component: VeiculoCreateComponent, canActivate:[authGuard] },
    { path: 'veiculos/update/:id', component: VeiculoUpdateComponent, canActivate:[authGuard] },
    { path: 'veiculos/delete/:id', component: VeiculoDeleteComponent, canActivate:[authGuard] },

    { path: 'categorias', component: ListarCategoriasComponent, canActivate:[authGuard]},
    { path: 'categorias/create', component: AdicionarCategoriasComponent, canActivate:[authGuard] },
    { path: 'categorias/update/:id', component: EditarCategoriaComponent, canActivate:[authGuard] },
    { path: 'categorias/delete/:id', component: ExcluirCategoriaComponent, canActivate:[authGuard] },

    { path: 'servicos', component: ListarServicosComponent, canActivate:[authGuard] },
    { path: 'servicos/create', component: AdicionarServicoComponent, canActivate:[authGuard] },
    { path: 'servicos/update/:id', component: EditarServicoComponent, canActivate:[authGuard] },
    { path: 'servicos/delete/:id', component: ExcluirServicoComponent, canActivate:[authGuard] },

    { path: 'tipos-servicos', component: TiposervicoListComponent, canActivate:[authGuard] },
    { path: 'tipos-servicos/create', component: TiposervicoCreateComponent, canActivate:[authGuard] },
    { path: 'tipos-servicos/update/:id', component: TiposervicoUpdateComponent, canActivate:[authGuard] },
    { path: 'tipos-servicos/delete/:id', component: TiposervicoDeleteComponent, canActivate:[authGuard] },

    { path: 'ordens-servicos', component: OrdemservicoListComponent, canActivate:[authGuard] },
    { path: 'ordens-servicos/create', component: OrdemservicoCreateComponent, canActivate:[authGuard] },
    { path: 'ordens-servicos/update/:id', component: OrdemservicoUpdateComponent, canActivate:[authGuard] },
    { path: 'ordens-servicos/cancel/:id', component: OrdemservicoCancelComponent, canActivate:[authGuard] },
    { path: 'ordens-servicos/finish/:id', component: OrdemservicoFinishComponent, canActivate:[authGuard] },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
