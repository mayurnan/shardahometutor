import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationcontrollerComponent } from './registrationcontroller.component';

describe('RegistrationcontrollerComponent', () => {
  let component: RegistrationcontrollerComponent;
  let fixture: ComponentFixture<RegistrationcontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationcontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
