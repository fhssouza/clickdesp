import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Servico } from 'src/app/models/Servico';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-excluir-servico',
  templateUrl: './excluir-servico.component.html',
  styleUrls: ['./excluir-servico.component.css']
})
export class ExcluirServicoComponent {

  servico: Servico = {
    descricao:'',
    preco:'',
    categoria:''
  }

  constructor(
    private service: ServicoService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((servico) => {
      this.servico = servico;
    })
  }

  delete(): void {
    this.service.delete(this.servico.id).subscribe(() => {
      this.toast.success('Servico deletado com sucesso', 'Delete');
      this.router.navigate(['servicos'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  cancelar(){
    this.router.navigate(['servicos']);
  }

}
