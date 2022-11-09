import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRegistrationComponent } from './contact-registration.component';

describe('ContactRegistrationComponent', () => {
  let component: ContactRegistrationComponent;
  let fixture: ComponentFixture<ContactRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
