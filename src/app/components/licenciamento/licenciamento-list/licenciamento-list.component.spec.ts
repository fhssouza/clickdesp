import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciamentoListComponent } from './licenciamento-list.component';

describe('LicenciamentoListComponent', () => {
  let component: LicenciamentoListComponent;
  let fixture: ComponentFixture<LicenciamentoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenciamentoListComponent]
    });
    fixture = TestBed.createComponent(LicenciamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
