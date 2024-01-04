import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioListComponent } from './proprietario-list.component';

describe('ProprietarioListComponent', () => {
  let component: ProprietarioListComponent;
  let fixture: ComponentFixture<ProprietarioListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprietarioListComponent]
    });
    fixture = TestBed.createComponent(ProprietarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
