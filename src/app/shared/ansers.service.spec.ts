import { TestBed } from '@angular/core/testing';

import { AnsersService } from './ansers.service';

describe('AnsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnsersService = TestBed.get(AnsersService);
    expect(service).toBeTruthy();
  });
});
