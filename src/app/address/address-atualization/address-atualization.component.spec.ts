import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAtualizationComponent } from './address-atualization.component';

describe('AddressAtualizationComponent', () => {
  let component: AddressAtualizationComponent;
  let fixture: ComponentFixture<AddressAtualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressAtualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressAtualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
