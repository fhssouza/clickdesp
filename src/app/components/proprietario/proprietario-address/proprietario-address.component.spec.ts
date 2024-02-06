import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioAddressComponent } from './proprietario-address.component';

describe('ProprietarioAddressComponent', () => {
  let component: ProprietarioAddressComponent;
  let fixture: ComponentFixture<ProprietarioAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprietarioAddressComponent]
    });
    fixture = TestBed.createComponent(ProprietarioAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
