import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, Location  } from '@angular/common';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { TourService, LoginService, AlertService } from '../../../_services';
import { Trip, Tour, Account, TourGuide } from '../../../models';

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
  id: number;
  constructor(private tourService: TourService, 
              private loginService: LoginService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  {

  }

  ngOnInit(): void {

  }

}
