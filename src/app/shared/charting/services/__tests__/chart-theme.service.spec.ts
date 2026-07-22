import { TestBed } from '@angular/core/testing';

import { ChartThemeService } from './chart-theme.service';

describe('ChartThemeService', () => {
  let service: ChartThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
