import { TestBed } from '@angular/core/testing';

import { WaldentDialogService } from './waldent.dialog.service';

describe('WaldentDialogService', () => {
  let service: WaldentDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaldentDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
