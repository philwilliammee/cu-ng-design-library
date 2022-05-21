import { TestBed } from '@angular/core/testing';

import { CuNgDesignLibraryService } from './cu-ng-design-library.service';

describe('CuNgDesignLibraryService', () => {
  let service: CuNgDesignLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuNgDesignLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
