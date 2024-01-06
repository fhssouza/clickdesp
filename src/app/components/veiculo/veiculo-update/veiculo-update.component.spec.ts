import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoUpdateComponent } from './veiculo-update.component';

describe('VeiculoUpdateComponent', () => {
  let component: VeiculoUpdateComponent;
  let fixture: ComponentFixture<VeiculoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculoUpdateComponent]
    });
    fixture = TestBed.createComponent(VeiculoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
