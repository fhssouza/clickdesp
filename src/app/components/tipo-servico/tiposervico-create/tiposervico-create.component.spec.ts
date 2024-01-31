import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoCreateComponent } from './tiposervico-create.component';

describe('TiposervicoCreateComponent', () => {
  let component: TiposervicoCreateComponent;
  let fixture: ComponentFixture<TiposervicoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposervicoCreateComponent]
    });
    fixture = TestBed.createComponent(TiposervicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
