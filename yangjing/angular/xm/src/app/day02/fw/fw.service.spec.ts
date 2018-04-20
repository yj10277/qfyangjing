import { TestBed, inject } from '@angular/core/testing';

import { FwService } from './fw.service';

describe('FwService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FwService]
    });
  });

  it('should be created', inject([FwService], (service: FwService) => {
    expect(service).toBeTruthy();
  }));
});
