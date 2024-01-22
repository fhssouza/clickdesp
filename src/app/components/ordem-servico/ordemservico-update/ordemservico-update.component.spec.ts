import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemservicoUpdateComponent } from './ordemservico-update.component';

describe('OrdemservicoUpdateComponent', () => {
  let component: OrdemservicoUpdateComponent;
  let fixture: ComponentFixture<OrdemservicoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemservicoUpdateComponent]
    });
    fixture = TestBed.createComponent(OrdemservicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
