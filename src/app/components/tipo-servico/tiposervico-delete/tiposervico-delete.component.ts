import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoServico } from 'src/app/models/TipoServico';
import { TiposervicoService } from 'src/app/services/tiposervico.service';

@Component({
  selector: 'app-tiposervico-delete',
  templateUrl: './tiposervico-delete.component.html',
  styleUrls: ['./tiposervico-delete.component.css']
})
export class TiposervicoDeleteComponent {

  tipoServico: TipoServico = {
    descricao:''
  }

  constructor(
    private tipoServicoService: TiposervicoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){}

  ngOnInit(): void {
    this.tipoServico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.tipoServicoService.findById(this.tipoServico.id).subscribe(resposta => {
      this.tipoServico = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  delete(): void {
    this.tipoServicoService.delete(this.tipoServico.id).subscribe(() => {
      this.toastService.success('Tipo Servico deletado com sucesso', 'Deletar');
      this.router.navigate(['tipos-servicos'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toastService.error(element.message);
        });
      } else {
        this.toastService.error(ex.error.message);
      }
    })
  }

  cancelar(){
    this.router.navigate(['tipos-servicos']);
  }

}
