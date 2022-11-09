import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRemovalComponent } from './company-removal.component';

describe('CompanyRemovalComponent', () => {
  let component: CompanyRemovalComponent;
  let fixture: ComponentFixture<CompanyRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
