import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaginationComponent } from './question-pagination.component';

describe('QuestionPaginationComponent', () => {
  let component: QuestionPaginationComponent;
  let fixture: ComponentFixture<QuestionPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
