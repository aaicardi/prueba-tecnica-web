import { TestBed } from '@angular/core/testing';

import { MasterPageService } from './master-page.service';

describe('MasterPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterPageService = TestBed.get(MasterPageService);
    expect(service).toBeTruthy();
  });
});
