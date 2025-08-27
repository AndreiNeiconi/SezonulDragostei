import { TestBed } from '@angular/core/testing';

import { ChangeTextContentService } from './change-text-content.service';

describe('ChangeTextContentService', () => {
  let service: ChangeTextContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeTextContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
