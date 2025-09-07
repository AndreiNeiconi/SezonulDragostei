import { TestBed } from '@angular/core/testing';

import { ApiSubscribeService } from './api-subscribe.service';

describe('ApiSubscribeService', () => {
  let service: ApiSubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
