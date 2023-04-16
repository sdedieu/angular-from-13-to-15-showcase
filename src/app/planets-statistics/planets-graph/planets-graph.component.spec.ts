import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsGraphComponent } from './planets-graph.component';

describe('PlanetsGraphComponent', () => {
  let component: PlanetsGraphComponent;
  let fixture: ComponentFixture<PlanetsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
