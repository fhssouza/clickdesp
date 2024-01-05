import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioUpdateComponent } from './proprietario-update.component';

describe('ProprietarioUpdateComponent', () => {
  let component: ProprietarioUpdateComponent;
  let fixture: ComponentFixture<ProprietarioUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprietarioUpdateComponent]
    });
    fixture = TestBed.createComponent(ProprietarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
