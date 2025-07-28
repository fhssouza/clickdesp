import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciamentoUpdateComponent } from './licenciamento-update.component';

describe('LicenciamentoUpdateComponent', () => {
  let component: LicenciamentoUpdateComponent;
  let fixture: ComponentFixture<LicenciamentoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenciamentoUpdateComponent]
    });
    fixture = TestBed.createComponent(LicenciamentoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
