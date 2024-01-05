import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioCreateComponent } from './proprietario-create.component';

describe('ProprietarioCreateComponent', () => {
  let component: ProprietarioCreateComponent;
  let fixture: ComponentFixture<ProprietarioCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprietarioCreateComponent]
    });
    fixture = TestBed.createComponent(ProprietarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
