import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarServicoComponent } from './adicionar-servico.component';

describe('AdicionarServicoComponent', () => {
  let component: AdicionarServicoComponent;
  let fixture: ComponentFixture<AdicionarServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarServicoComponent]
    });
    fixture = TestBed.createComponent(AdicionarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
