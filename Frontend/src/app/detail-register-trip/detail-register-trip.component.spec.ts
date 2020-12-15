import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRegisterTripComponent } from './detail-register-trip.component';

describe('DetailRegisterTripComponent', () => {
  let component: DetailRegisterTripComponent;
  let fixture: ComponentFixture<DetailRegisterTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRegisterTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRegisterTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
