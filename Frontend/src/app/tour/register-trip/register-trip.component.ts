import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TourService, LoginService, AlertService } from '../../_services';
import { Tour, Account, TourGuide } from '../../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../../web-request.service';

@Component({
  selector: 'app-register-trip',
  templateUrl: './register-trip.component.html',
  styleUrls: ['./register-trip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterTripComponent implements OnInit {
  form: FormGroup;
  tour: Tour;
  loading = false;
  submitted = false;
  account: Account;
  tourGuide: TourGuide;
  constructor(private tourService: TourService, 
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,) 
  { 
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameRegister: ['', Validators.required],
      identity: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      adults: ['', Validators.required],
      children: ['', Validators.required],
      baby: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  register(){     
    console.log(this.form.value);
  }

}
