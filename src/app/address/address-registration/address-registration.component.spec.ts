import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRegistrationComponent } from './address-registration.component';

describe('AddressRegistrationComponent', () => {
  let component: AddressRegistrationComponent;
  let fixture: ComponentFixture<AddressRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
