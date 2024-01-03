import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarServicoComponent } from './editar-servico.component';

describe('EditarServicoComponent', () => {
  let component: EditarServicoComponent;
  let fixture: ComponentFixture<EditarServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarServicoComponent]
    });
    fixture = TestBed.createComponent(EditarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
