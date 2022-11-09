import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAtualizationComponent } from './contact-atualization.component';

describe('ContactAtualizationComponent', () => {
  let component: ContactAtualizationComponent;
  let fixture: ComponentFixture<ContactAtualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAtualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAtualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
