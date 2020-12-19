
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, Location  } from '@angular/common';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { TourService, LoginService, AlertService } from '../../../_services';
import { Trip, Tour, Account, TourGuide } from '../../../models';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TripComponent implements OnInit {
  form: FormGroup;
  price: String;
  tours: Tour;
  tour: Tour;
  loading = false;
  submitted = false;
  trips: Trip;
  trip: Trip;
  tripArray: Array<Trip>;
  account: Account;
  tourGuide: TourGuide;
  sub: any;
  id: number;
  items = [];

  constructor(private tourService: TourService, 
              private loginService: LoginService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      this.tourService.getTripById(id)
            .pipe(first())
            .subscribe(trip => {
              // console.log('--------------TRIP-------------');
              // console.log(trip);
              this.trips = trip}
            );    
            
            
    }); 
    this.trips = this.tourService.tripValue;
    // console.log(this.trips)
    this.loginService.account.subscribe(x => this.account = x);
    this.loginService.tourguide.subscribe(a => this.tourGuide = a);
    this.tourService.tour.subscribe(a => this.tours = a);
    for(let i in this.tours) {
      if(this.tours[i].id === this.id)
      { 
        this.tour = this.tours[i];
      }
    }
  }
  ngOnInit(): void {   

    this.form = this.formBuilder.group({
      infoHotel: ['', Validators.required],
      infoVehicle: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      price: [this.tour.price.toString(), Validators.required],
      childrenPrice: [this.tour.price.toString(), Validators.required],
      babyPrice: [0, Validators.required],
      tourId: [this.tourGuide.id.toString(), Validators.required]
    });  
    
  }

  get f() { return this.form.controls; }

  pageRefresh() {     
    location.reload();
  }

  onChangePage(tripArray: Array<Trip>) {
    // update current page of items
    this.tripArray = tripArray;
  } 

  addTrip() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;      
    this.trip = this.form.value;

    this.trip.endDate = new DatePipe('en-US').transform(this.trip.endDate, 'dd/MM/yyyy');
    this.trip.startDate = new DatePipe('en-US').transform(this.trip.startDate, 'dd/MM/yyyy');
    this.trip.tourGuideId = this.tourGuide.id;
    this.trip.tourId = Number(this.trip.tourId);

    this.tourService.addTrip(this.trip, this.id)
                          .pipe(first())
                                .subscribe({
                                    next: (trip: any) => {
                                      // console.log("------------------------------------");
                                      // console.log(trip);                                      
                                      this.alertService.success('Add Trip successful. Thank you for joining the trip!', { keepAfterRouteChange: true });
                                      this.pageRefresh();                                                                                                                                                                                              
                                      // this.router.navigate(['/tour/:id/blog&trip', trip.tourId], { relativeTo: this.route });
                                      
                                    },
                                    error: er => {
                                      console.log(er);
                                      alert(er.error.error);
                                       // this.alertService.error('Add Tour Failed', { keepAfterRouteChange: true });
                                        this.loading = false;
                                    }
                                });     
  }

}
