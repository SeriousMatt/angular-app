import { TestBed, inject } from '@angular/core/testing';

import { ProjectItemsService } from './project-items.service';

describe('ProjectItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectItemsService]
    });
  });

  it('should be created', inject([ProjectItemsService], (service: ProjectItemsService) => {
    expect(service).toBeTruthy();
  }));
});
