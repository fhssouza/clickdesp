import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proprietario } from 'src/app/models/Proprietario';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-proprietario-delete',
  templateUrl: './proprietario-delete.component.html',
  styleUrls: ['./proprietario-delete.component.css']
})
export class ProprietarioDeleteComponent {

  proprietario: Proprietario = {
    cpfOuCnpj: '',
    email: '',
    habilitacao: '',
    identidade: '',
    nome: '',
    responsavel: '',
    telefone: '',
    tipoPessoa: ''
  }

  constructor(
    private proprietarioService: ProprietarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){}

  ngOnInit(): void {
    this.proprietario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.proprietarioService.findById(this.proprietario.id).subscribe(resposta => {
      this.proprietario = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  delete(): void {
    this.proprietarioService.delete(this.proprietario.id).subscribe(() => {
      this.toastService.success('Proprietário deletado com sucesso', 'Deletar');
      this.router.navigate(['proprietarios'])
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
    this.router.navigate(['proprietarios']);
  }
}
