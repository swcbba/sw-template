import { TestBed } from '@angular/core/testing';

import { CountdownService } from './countdown.service';

describe('CountdownService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CountdownService]
    })
  );

  it('should be created', () => {
    const service: CountdownService = TestBed.get(CountdownService);
    expect(service).toBeTruthy();
  });
});
