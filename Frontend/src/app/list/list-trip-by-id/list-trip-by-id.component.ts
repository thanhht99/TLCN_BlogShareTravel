import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, Location  } from '@angular/common';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { TourService, LoginService, AlertService, TourGuideService } from '../../_services';
import { Trip, Tour, Account, TourGuide, Customer, RegisterTrip } from '../../models';

@Component({
  selector: 'app-list-trip-by-id',
  templateUrl: './list-trip-by-id.component.html',
  styleUrls: ['./list-trip-by-id.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTripByIdComponent implements OnInit {

  loading = false;
  submitted = false;
  trip: Trip;
  account: Account;
  tourGuide: TourGuide;

  listTrips: Trip;
  listTripsArray: Array<Trip>;

  listTripDaThucHiens: Trip;
  listTripDaThucHiensArray: Array<Trip>;

  id: number;
  sub: any;
  constructor(private tourService: TourService, 
              private loginService: LoginService,
              private tourGuideService: TourGuideService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  { 
    this.tourGuide = this.tourGuideService.tourGuideValue;
    this.account = this.loginService.accountValue;
    if(this.account.isTourGuide)
    { 
      this.id = Number(this.tourGuide.id);
      // console.log(this.id);
      this.tourGuideService.listTripByTourGuideId(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );

      this.tourGuideService.listTripDaHoanThanhByTourGuideId(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );
    }

    this.listTrips = this.tourGuideService.listTripValue;
    this.listTripDaThucHiens = this.tourGuideService.listTripDaHoanThanhValue;


  }

  ngOnInit(): void {
  }

  onChangePage(listTripsArray: Array<Trip>) {
    this.listTripsArray = listTripsArray;
  } 

  onChangePage2(listTripDaThucHiensArray: Array<Trip>) {
    this.listTripDaThucHiensArray = listTripDaThucHiensArray;
  } 

  reloadPage(){
    window.location.reload();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
