import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe, Location  } from '@angular/common';

import { TourGuideService, TourService, AlertService,CustomerService,LoginService } from '../../_services';
import { Tour, Account, TourGuide, RegisterTrip, Customer, Trip } from '../../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../../web-request.service';

@Component({
  selector: 'app-detail-trip',
  templateUrl: './detail-trip.component.html',
  styleUrls: ['./detail-trip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailTripComponent implements OnInit {

  tourGuide: TourGuide;
  account: Account;
  tour: Tour;
  id: number;
  sub: any;
  status: boolean;

  trips: Trip;
  registerTrips: RegisterTrip;
  registerTripArray: Array<RegisterTrip>;
  constructor(private tourGuideService: TourGuideService, 
              private alertService: AlertService,
              private tourService: TourService,
              private loginService: LoginService,
              private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  { 
    this.status = false;
    this.account = this.loginService.accountValue;
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      // console.log(this.id)
      
      this.tourGuideService.listKhachHangDangKyTour(id)
        .pipe(first())
        .subscribe(registerTrips => {
            if(typeof registerTrips === 'object'){
              this.status = true;
              this.registerTrips = registerTrips;
              // console.log(registerTrips);
            } 
            else{
              this.tourGuideService.getDetailTripById(id)
              .pipe(first())
              .subscribe(trip => {
                  if(typeof trip === 'object'){
                    this.trips = trip;
                  } 
                  else{                    
                  }
                }
              );
            }
          }
        );
    });
    this.registerTrips = this.tourGuideService.listDetailTripValue;
    this.trips = this.tourGuideService.detailTripByIdValue;
    // console.log(this.registerTrips)




  }

  ngOnInit(): void {
  }

  onChangePage(registerTripArray: Array<RegisterTrip>) {
    this.registerTripArray = registerTripArray;
  } 

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  reloadPage(){
    window.location.reload();
  }
  

}
