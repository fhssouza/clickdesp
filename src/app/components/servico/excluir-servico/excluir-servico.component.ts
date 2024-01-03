import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((servico) => {
      this.servico = servico;
    })
  }

  excluir(){
    if (this.servico.id){
      this.service.delete(this.servico.id).subscribe((servico) => {
        this.router.navigate(['listarservicos']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['listarservicos']);
  }

}
