import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPlanetDialogComponent } from './create-new-planet-dialog.component';

describe('CreateNewPlanetDialogComponent', () => {
  let component: CreateNewPlanetDialogComponent;
  let fixture: ComponentFixture<CreateNewPlanetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CreateNewPlanetDialogComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPlanetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
