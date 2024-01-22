import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemservicoCancelComponent } from './ordemservico-cancel.component';

describe('OrdemservicoCancelComponent', () => {
  let component: OrdemservicoCancelComponent;
  let fixture: ComponentFixture<OrdemservicoCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemservicoCancelComponent]
    });
    fixture = TestBed.createComponent(OrdemservicoCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
