import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proprietario } from 'src/app/models/Proprietario';
import { ProprietarioService } from 'src/app/services/proprietario.service';

@Component({
  selector: 'app-proprietario-update',
  templateUrl: './proprietario-update.component.html',
  styleUrls: ['./proprietario-update.component.css']
})
export class ProprietarioUpdateComponent {

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

  formulario = new FormGroup({
    cpfOuCnpj: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    habilitacao: new FormControl('', Validators.required),
    identidade: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    responsavel: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]),
    tipoPessoa: new FormControl('', Validators.required),
  })

  constructor(
    private proprietarioService: ProprietarioService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastrService
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

  update(): void {
    this.proprietarioService.update(this.proprietario).subscribe(() => {
      this.toastService.success('Proprietário atualizado com sucesso', 'Atualizar');
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

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar(){
    this.router.navigate(['proprietarios']);
  }

}
