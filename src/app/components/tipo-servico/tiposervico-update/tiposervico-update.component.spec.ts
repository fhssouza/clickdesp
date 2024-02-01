import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoUpdateComponent } from './tiposervico-update.component';

describe('TiposervicoUpdateComponent', () => {
  let component: TiposervicoUpdateComponent;
  let fixture: ComponentFixture<TiposervicoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposervicoUpdateComponent]
    });
    fixture = TestBed.createComponent(TiposervicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
