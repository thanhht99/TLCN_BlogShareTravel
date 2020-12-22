import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe, Location  } from '@angular/common';

import { TourGuideService, TourService, AlertService,CustomerService,LoginService } from '../../_services';
import { Tour, Account, TourGuide, RegisterTrip, Customer, Trip } from '../../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../../web-request.service';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.component.html',
  styleUrls: ['./detail-tour.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailTourComponent implements OnInit {
  tourGuide: TourGuide;
  account: Account;
  tour: Tour;
  id: number;
  loading = false;
  submitted = false;
  sub: any;
  listChuaDuyets: Tour;
  listDaDuyets: Tour;

  trips: Trip;
  tripArray: Array<Trip>;
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
    this.account = this.loginService.accountValue;
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      // console.log(this.id)    
      
      try{
        this.tourService.getTripById(id)
        .pipe(first())
        .subscribe(trip => {
          // console.log(trip);
          this.trips = trip;
          }
        );
      }catch{
        this.trips = null;
      }  
    });

    this.listChuaDuyets = this.tourService.tourChuaDuyetValue;
    // console.log('--------------listChuaDuyet-------------');
    // console.log(this.listChuaDuyets);
    for(let i in this.listChuaDuyets) {
      if(this.listChuaDuyets[i].id === this.id)
      { 
        this.tour = this.listChuaDuyets[i];
      }      
    }

    this.listDaDuyets = this.tourService.tourDaDuyetValue;
    // console.log('--------------listChuaDuyet-------------');
    // console.log(this.listChuaDuyets);
    for(let i in this.listDaDuyets) {
      if(this.listDaDuyets[i].id === this.id)
      { 
        this.tour = this.listDaDuyets[i];
      }      
    }
    this.tour.updatedAt = new DatePipe('en-US').transform(this.tour.updatedAt, 'dd/MM/yyyy');
    // console.log(this.tour)
  }

  onChangePage(tripArray: Array<Trip>) {
    this.tripArray = tripArray;
  } 

  addImage(){
    this.router.navigate(['/tour/add/image', this.tour.id], { relativeTo: this.route });
  }

  ngOnInit(): void {
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  reloadPage(){
    window.location.reload();
  }

}
