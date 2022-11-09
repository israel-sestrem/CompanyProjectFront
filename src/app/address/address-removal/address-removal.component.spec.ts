import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRemovalComponent } from './address-removal.component';

describe('AddressRemovalComponent', () => {
  let component: AddressRemovalComponent;
  let fixture: ComponentFixture<AddressRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
