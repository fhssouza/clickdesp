import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemservicoCreateComponent } from './ordemservico-create.component';

describe('OrdemservicoCreateComponent', () => {
  let component: OrdemservicoCreateComponent;
  let fixture: ComponentFixture<OrdemservicoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemservicoCreateComponent]
    });
    fixture = TestBed.createComponent(OrdemservicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
