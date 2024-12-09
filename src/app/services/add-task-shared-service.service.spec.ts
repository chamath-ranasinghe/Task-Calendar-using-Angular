import { TestBed } from '@angular/core/testing';

import { AddTaskSharedServiceService } from './add-task-shared-service.service';

describe('AddTaskSharedServiceService', () => {
  let service: AddTaskSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTaskSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
