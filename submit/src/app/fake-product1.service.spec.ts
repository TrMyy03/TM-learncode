import { TestBed } from '@angular/core/testing';

import { FakeProduct1Service } from './fake-product1.service';

describe('FakeProduct1Service', () => {
  let service: FakeProduct1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeProduct1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
