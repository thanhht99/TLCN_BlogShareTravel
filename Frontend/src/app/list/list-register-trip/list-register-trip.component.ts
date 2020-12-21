import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, Location  } from '@angular/common';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { TourService, LoginService, AlertService } from '../../_services';
import { Trip, Tour, Account, TourGuide, Customer, RegisterTrip } from '../../models';

@Component({
  selector: 'app-list-register-trip',
  templateUrl: './list-register-trip.component.html',
  styleUrls: ['./list-register-trip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListRegisterTripComponent implements OnInit {
  loading = false;
  submitted = false;
  tour: Tour;
  account: Account;
  tourGuide: TourGuide;
  customer: Customer;
  listChuaDuyets: RegisterTrip;
  listDaDuyets: RegisterTrip;
  listChuaDuyetsArray: Array<RegisterTrip>;
  listDaDuyetsArray: Array<RegisterTrip>;
  id: number;
  sub: any;
  constructor(private tourService: TourService, 
              private loginService: LoginService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  {
    // this.customer = this.loginService.customerValue;
    // console.log("--------------CUSTOMER---------------")
    // console.log(this.customer)
    // this.tourGuide = this.loginService.tourguideValue;
    // console.log("--------------TOURGUIDE---------------")
    // console.log(this.tourGuide)
    this.account = this.loginService.accountValue;
    // console.log("--------------account---------------")
    // console.log(this.account)

    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      // console.log(this.id)
      this.tourService.listTripChuaDuyet(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );    

      this.tourService.listTripDaDuyet(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );      
    }); 
    

  }

  onChangePage(listDaDuyetsArray: Array<RegisterTrip>) {
    // update current page of items
    this.listDaDuyetsArray = listDaDuyetsArray;
    // console.log(this.listDaDuyetsArray)
  } 

  onChangePage2(listChuaDuyetsArray: Array<RegisterTrip>) {
    // update current page of items
    this.listChuaDuyetsArray = listChuaDuyetsArray;
  } 

  ngOnInit(): void {
    

    this.listChuaDuyets = this.tourService.registertripChuaDuyetValue;
    // console.log('--------------listChuaDuyet-------------');
    // console.log(this.listChuaDuyets);

    this.listDaDuyets = this.tourService.registertripDaDuyetValue;
    // console.log('--------------listDaDuyets-------------');
    // console.log(this.listDaDuyets);
  }

  reloadPage(){
    window.location.reload();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
