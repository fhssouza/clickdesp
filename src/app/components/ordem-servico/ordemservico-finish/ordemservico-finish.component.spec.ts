import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemservicoFinishComponent } from './ordemservico-finish.component';

describe('OrdemservicoFinishComponent', () => {
  let component: OrdemservicoFinishComponent;
  let fixture: ComponentFixture<OrdemservicoFinishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemservicoFinishComponent]
    });
    fixture = TestBed.createComponent(OrdemservicoFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
