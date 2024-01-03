import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { Servico } from 'src/app/models/Servico';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ServicoService } from 'src/app/services/servico.service';


@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.css']
})
export class EditarServicoComponent {

  servico: Servico = {
    descricao:'',
    preco:'',
    categoria:''
  }

  categorias: Categoria[] = [];

  formulario = new FormGroup({
    descricao: new FormControl(null, Validators.required),
    preco: new FormControl(null, Validators.required),
    categoria: new FormControl(null, [Validators.required]),
  });

  constructor(
    private servicoService: ServicoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){}

  ngOnInit(): void {
    this.servico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllCategorias();
  }

  findById(): void {
    this.servicoService.findById(this.servico.id).subscribe(resposta => {
      this.servico = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  update(): void {
    this.servicoService.update(this.servico).subscribe(() => {
      this.toastService.success('Serviço atualizado com sucesso', 'Update');
      this.router.navigate(['servicos'])
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

  findAllCategorias(): void {
    this.categoriaService.listar().subscribe(resposta => {
      this.categorias = resposta;
    })
  }

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancel(){
    this.router.navigate(['servicos'])
  }

}
