import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsFilterDialogComponent } from './planets-filter-dialog.component';

describe('PlanetsFilterDialogComponent', () => {
  let component: PlanetsFilterDialogComponent;
  let fixture: ComponentFixture<PlanetsFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PlanetsFilterDialogComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
