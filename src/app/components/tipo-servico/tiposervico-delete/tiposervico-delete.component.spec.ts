import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoDeleteComponent } from './tiposervico-delete.component';

describe('TiposervicoDeleteComponent', () => {
  let component: TiposervicoDeleteComponent;
  let fixture: ComponentFixture<TiposervicoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposervicoDeleteComponent]
    });
    fixture = TestBed.createComponent(TiposervicoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
