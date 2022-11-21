import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAtualizationComponent } from './user-atualization.component';

describe('UserAtualizationComponent', () => {
  let component: UserAtualizationComponent;
  let fixture: ComponentFixture<UserAtualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAtualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAtualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
