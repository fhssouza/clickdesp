import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciamentoCreateComponent } from './licenciamento-create.component';

describe('LicenciamentoCreateComponent', () => {
  let component: LicenciamentoCreateComponent;
  let fixture: ComponentFixture<LicenciamentoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenciamentoCreateComponent]
    });
    fixture = TestBed.createComponent(LicenciamentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
