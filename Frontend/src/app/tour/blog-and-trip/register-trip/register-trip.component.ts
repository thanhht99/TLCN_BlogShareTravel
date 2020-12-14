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
  tours: Tour;
  tour: Tour;
  trips: Trip;
  trip: Trip;
  registerTrip: RegisterTrip;
  account: Account;
  tourGuide: TourGuide;
  customer: Customer;

  loading = false;
  submitted = false;
  id: number;
  constructor(private tourService: TourService, 
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,) 
  { 
    this.loginService.account.subscribe(x => this.account = x);
    // console.log("------------ACC--------------")
    // console.log(this.account)
    this.id = this.route.snapshot.params['id'];
    this.id = Number(this.id);
    // console.log('-------ID trip--------')
    // console.log(this.id)
    this.tourService.trip.subscribe(b => this.trips = b);
    // console.log(this.trips)
    for(let i in this.trips) {
      if(this.trips[i].id === this.id)
      { 
        this.trip = this.trips[i];
      }
    }
    // console.log("=========TRIP===========")
    // console.log(this.trip)


    this.tourService.tour.subscribe(a => this.tours = a);
    // console.log(this.tours)
    for(let i in this.tours) {
      if(this.tours[i].id === this.trip.tourId)
      { 
        this.tour = this.tours[i];
      }
    }
    // console.log("=========TOUR===========")
    // console.log(this.tour)


  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameRegister: ['', Validators.required],
      identity: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      gender: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      adults: [1, Validators.required],
      children: [0, Validators.required],
      baby: [0, Validators.required],
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

    if(this.account.isCustomer){
      // console.log("=========customer===========")
      this.customer = this.loginService.customerValue;
      this.registerTrip.email = this.customer.email;
      // console.log(this.customer)
    }
    if(this.account.isTourGuide){
      // console.log("=========tourGuide===========")
      this.tourGuide = this.loginService.tourguideValue;
      this.registerTrip.email = this.tourGuide.email;
      // console.log(this.tourGuide)
    }

    if(this.registerTrip.adults > 0){
      this.tourService.registerTrip(this.registerTrip)
      .pipe(first())
            .subscribe({
                next: (registerTrip: any) => {
                  // console.log("------------------------------------");
                  // console.log(registerTrip);
                  // this.alertService.success('Register successful. Please wait for confirmation from the trip organizer!', { keepAfterRouteChange: true });                                                                                                                                                         
                  this.router.navigate(['/tour/list'], { relativeTo: this.route });
                },
                error: er => {
                  // console.log(er);
                  alert(er.error.error);
                  this.loading = false;
                }
            });  
    }
    else{
      alert('Phải có người lớn theo cùng. Cám ơn!');
      this.loading = false;
    }

       
  }

}
