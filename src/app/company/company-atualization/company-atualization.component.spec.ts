import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAtualizationComponent } from './company-atualization.component';

describe('CompanyAtualizationComponent', () => {
  let component: CompanyAtualizationComponent;
  let fixture: ComponentFixture<CompanyAtualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAtualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAtualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
