import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCategoriasComponent } from './adicionar-categorias.component';

describe('AdicionarCategoriasComponent', () => {
  let component: AdicionarCategoriasComponent;
  let fixture: ComponentFixture<AdicionarCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarCategoriasComponent]
    });
    fixture = TestBed.createComponent(AdicionarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
