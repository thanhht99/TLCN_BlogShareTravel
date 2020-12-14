import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisterTripComponent } from './list-register-trip.component';

describe('ListRegisterTripComponent', () => {
  let component: ListRegisterTripComponent;
  let fixture: ComponentFixture<ListRegisterTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegisterTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegisterTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
