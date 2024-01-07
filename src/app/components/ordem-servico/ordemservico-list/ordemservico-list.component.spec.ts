import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemservicoListComponent } from './ordemservico-list.component';

describe('OrdemservicoListComponent', () => {
  let component: OrdemservicoListComponent;
  let fixture: ComponentFixture<OrdemservicoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemservicoListComponent]
    });
    fixture = TestBed.createComponent(OrdemservicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
