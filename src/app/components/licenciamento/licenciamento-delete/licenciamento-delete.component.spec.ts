import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciamentoDeleteComponent } from './licenciamento-delete.component';

describe('LicenciamentoDeleteComponent', () => {
  let component: LicenciamentoDeleteComponent;
  let fixture: ComponentFixture<LicenciamentoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenciamentoDeleteComponent]
    });
    fixture = TestBed.createComponent(LicenciamentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
