import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoListComponent } from './tiposervico-list.component';

describe('TiposervicoListComponent', () => {
  let component: TiposervicoListComponent;
  let fixture: ComponentFixture<TiposervicoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposervicoListComponent]
    });
    fixture = TestBed.createComponent(TiposervicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
