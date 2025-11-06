import { TestBed } from '@angular/core/testing';

import { AdminBaseService } from './admin.base.service';

describe('AdminBaseService', () => {
  let service: AdminBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
