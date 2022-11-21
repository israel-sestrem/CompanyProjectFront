import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemovalComponent } from './user-removal.component';

describe('UserRemovalComponent', () => {
  let component: UserRemovalComponent;
  let fixture: ComponentFixture<UserRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
