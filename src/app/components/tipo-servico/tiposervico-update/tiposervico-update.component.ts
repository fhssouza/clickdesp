import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoServico } from 'src/app/models/TipoServico';
import { TiposervicoService } from 'src/app/services/tiposervico.service';


@Component({
  selector: 'app-tiposervico-update',
  templateUrl: './tiposervico-update.component.html',
  styleUrls: ['./tiposervico-update.component.css']
})
export class TiposervicoUpdateComponent {

  id: number;

  tipoServico: TipoServico = {
    descricao: ''
  }

  formulario = new FormGroup({
    descricao: new FormControl('', Validators.required)
  })

  constructor(
    private tipoServicoService: TiposervicoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.findById();
  }

  findById(): void {
    this.tipoServicoService.findById(this.id).subscribe(resposta => {
      this.tipoServico = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  update(): void {
    this.tipoServicoService.update(this.tipoServico).subscribe(() => {
      this.toastService.success('Tipo de Servicos atualizada com sucesso', 'Atualizar');
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

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar(){
    this.router.navigate(['tipos-servicos'])
  }
}
