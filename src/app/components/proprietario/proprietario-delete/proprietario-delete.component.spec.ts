import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioDeleteComponent } from './proprietario-delete.component';

describe('ProprietarioDeleteComponent', () => {
  let component: ProprietarioDeleteComponent;
  let fixture: ComponentFixture<ProprietarioDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprietarioDeleteComponent]
    });
    fixture = TestBed.createComponent(ProprietarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
