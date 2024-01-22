import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { OrdemservicoService } from 'src/app/services/ordemservico.service';

@Component({
  selector: 'app-ordemservico-finish',
  templateUrl: './ordemservico-finish.component.html',
  styleUrls: ['./ordemservico-finish.component.css']
})
export class OrdemservicoFinishComponent {

  ordemServico: OrdemServico = {
    id: '',
    veiculo: '',
    tipoServico: '',
    observacao: '',
    itens: []
  }

  constructor(
    private ordemServicoService: OrdemservicoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){}

  ngOnInit(): void {
    this.ordemServico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.ordemServicoService.findById(this.ordemServico.id).subscribe(resposta => {
      this.ordemServico = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  finish(): void {
    this.ordemServicoService.finish(this.ordemServico).subscribe(() => {
      this.toastService.success('Ordem de Serviço finalizada com sucesso', 'Finalizar');
      this.router.navigate(['ordens-servicos'])
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
    this.router.navigate(['ordens-servicos']);
  }
}
