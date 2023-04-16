import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsStatisticsComponent } from './planets-statistics.component';

describe('PlanetsStatisticsComponent', () => {
  let component: PlanetsStatisticsComponent;
  let fixture: ComponentFixture<PlanetsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
