import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirServicoComponent } from './excluir-servico.component';

describe('ExcluirServicoComponent', () => {
  let component: ExcluirServicoComponent;
  let fixture: ComponentFixture<ExcluirServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirServicoComponent]
    });
    fixture = TestBed.createComponent(ExcluirServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
