/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RatpApiService } from './ratpApi.service';

describe('Service: RatpApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatpApiService]
    });
  });

  it('should ...', inject([RatpApiService], (service: RatpApiService) => {
    expect(service).toBeTruthy();
  }));
});
