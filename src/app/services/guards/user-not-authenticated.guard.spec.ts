import { TestBed } from '@angular/core/testing';

import { UserNotAuthenticatedGuard } from './user-not-authenticated.guard';

describe('UserNotAuthenticatedGuard', () => {
  let guard: UserNotAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserNotAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
