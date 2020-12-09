import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TourService, LoginService, AlertService } from '../../../_services';
import { Tour, Account, TourGuide, RegisterTrip, Customer, Trip } from '../../../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../../../web-request.service';

@Component({
  selector: 'app-register-trip',
  templateUrl: './register-trip.component.html',
  styleUrls: ['./register-trip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterTripComponent implements OnInit {
  form: FormGroup;
  tour: Tour;
  trips: Trip;
  trip: Trip;
  registerTrip: RegisterTrip;
  account: Account;
  tourGuide: TourGuide;
  customer: Customer;

  loading = false;
  submitted = false;
  id: Number;
  constructor(private tourService: TourService, 
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,) 
  { 
    this.loginService.account.subscribe(x => this.account = x);
    //console.log(this.account)
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id)
    this.tourService.trip.subscribe(b => this.trips = b);
    // console.log(this.trips[0])       
    this.trip = this.trips[0];
    // console.log(this.trip)


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
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
      
    this.registerTrip = this.form.value;
    this.registerTrip.accountId = this.account.id;
    this.registerTrip.tripId = Number(this.id);
    
    // console.log('----------this.registerTrip----------');
    // console.log(this.registerTrip);

    this.tourService.registerTrip(this.registerTrip)
                          .pipe(first())
                                .subscribe({
                                    next: (registerTrip: any) => {
                                      // console.log("------------------------------------");
                                      // console.log(registerTrip);
                                      // this.alertService.success('Register successful. Please wait for confirmation from the trip organizer!', { keepAfterRouteChange: true });                                                                                                                                                         
                                      this.router.navigate(['/tour/blog&trip/registerTrip/success'], { relativeTo: this.route });
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
