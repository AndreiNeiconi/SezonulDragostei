import { TestBed } from '@angular/core/testing';

import { MemberService } from './subscribe.service';

describe('SubscribeService', () => {
  let service: MemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
