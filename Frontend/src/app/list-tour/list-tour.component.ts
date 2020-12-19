import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, Location  } from '@angular/common';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { TourService, LoginService, AlertService } from '../_services';
import { Trip, Tour, Account, TourGuide, Customer, RegisterTrip } from '../models';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTourComponent implements OnInit {

  loading = false;
  submitted = false;
  tour: Tour;
  account: Account;
  tourGuide: TourGuide;
  customer: Customer;
  listChuaDuyets: Tour;
  listDaDuyets: Tour;
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
    this.tourGuide = this.loginService.tourguideValue;
    this.account = this.loginService.accountValue;
    if(this.account.isTourGuide)
    { 
      this.id = Number(this.tourGuide.id);
      // console.log(this.id);
      this.tourService.listTourChuaDuyet(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );

      this.tourService.listTourDaDuyet(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );
    }
    this.listChuaDuyets = this.tourService.tourChuaDuyetValue;
    // console.log('--------------listChuaDuyet-------------');
    // console.log(this.listChuaDuyets);

    this.listDaDuyets = this.tourService.tourDaDuyetValue;
    // console.log('--------------listChuaDuyet-------------');
    // console.log(this.listChuaDuyets);
    

  }

  ngOnInit(): void {
  }

  reloadPage(){
    window.location.reload();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
