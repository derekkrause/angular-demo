import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBaseChart } from './echarts-base-chart';

describe('EchartsBaseChart', () => {
  let component: EchartsBaseChart;
  let fixture: ComponentFixture<EchartsBaseChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchartsBaseChart],
    }).compileComponents();

    fixture = TestBed.createComponent(EchartsBaseChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
