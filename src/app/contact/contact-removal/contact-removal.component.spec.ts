import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRemovalComponent } from './contact-removal.component';

describe('ContactRemovalComponent', () => {
  let component: ContactRemovalComponent;
  let fixture: ComponentFixture<ContactRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
