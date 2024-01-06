import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoDeleteComponent } from './veiculo-delete.component';

describe('VeiculoDeleteComponent', () => {
  let component: VeiculoDeleteComponent;
  let fixture: ComponentFixture<VeiculoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculoDeleteComponent]
    });
    fixture = TestBed.createComponent(VeiculoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
