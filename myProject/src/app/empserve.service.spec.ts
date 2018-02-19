import { TestBed, inject } from '@angular/core/testing';

import { EmpserveService } from './empserve.service';

describe('EmpserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpserveService]
    });
  });

  it('should be created', inject([EmpserveService], (service: EmpserveService) => {
    expect(service).toBeTruthy();
  }));
});
