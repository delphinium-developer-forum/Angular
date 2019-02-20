import { TestBed } from '@angular/core/testing';

import { HomeQuestionService } from './home-question.service';

describe('HomeQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeQuestionService = TestBed.get(HomeQuestionService);
    expect(service).toBeTruthy();
  });
});
