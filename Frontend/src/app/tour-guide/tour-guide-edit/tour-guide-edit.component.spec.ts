import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideEditComponent } from './tour-guide-edit.component';

describe('TourGuideEditComponent', () => {
  let component: TourGuideEditComponent;
  let fixture: ComponentFixture<TourGuideEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourGuideEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourGuideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
