import { TestBed } from '@angular/core/testing';

import { StudentAuthService } from './student-auth.service';

describe('StudentAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentAuthService = TestBed.get(StudentAuthService);
    expect(service).toBeTruthy();
  });
});
