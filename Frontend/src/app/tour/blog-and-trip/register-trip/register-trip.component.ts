import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe, Location  } from '@angular/common';

import { TourService, LoginService, AlertService, TourGuideService, CustomerService } from '../../../_services';
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
  giaNguoiLon: number;
  giaTreEm: number;
  giaEmBe: number;
  role: boolean;

  nameRegister: String;
  address: String;
  identity: String;
  gender: String;
  phone: String;

  constructor(private tourService: TourService, 
              private alertService: AlertService,
              private loginService: LoginService,
              private customerService: CustomerService,
              private tourGuideService: TourGuideService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  { 
    this.loginService.account.subscribe(x => this.account = x);
    this.tourGuide = this.tourGuideService.tourGuideValue;

    console.log("------------ACC--------------")
    console.log(this.account)

    if(this.account.isCustomer){
      // console.log("=========customer===========")
      this.customer = this.customerService.customerValue;
      // console.log(this.customer);
      this.nameRegister = this.customer.name;
      this.address = this.customer.address;
      this.identity = this.customer.identity;
      this.phone = this.customer.phone;
      this.gender = this.customer.gender;
    }
    if(this.account.isTourGuide){
      // console.log("=========tourGuide===========")
      this.tourGuide = this.tourGuideService.tourGuideValue;
      // console.log(this.tourGuide)
      this.nameRegister = this.tourGuide.name;
      this.address = this.tourGuide.address;
      this.identity = this.tourGuide.identity;
      this.phone = this.tourGuide.phone;
      this.gender = this.tourGuide.gender;
    }


    // console.log("-------------TESST------------------");
    // console.log(this.nameRegister);
    // console.log(this.address);
    // console.log(this.identity);
    // console.log(this.phone);
    // console.log(this.gender);
    


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
    let a = this.trip.price.split('.').join('');
    this.giaNguoiLon = Number(a);
    let b = this.trip.childrenPrice.split('.').join('');
    this.giaTreEm = Number(b);
    let c = this.trip.babyPrice.split('.').join('');
    this.giaEmBe = Number(c);

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
      nameRegister: [this.nameRegister, Validators.required],
      identity: [this.identity, [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      gender: [this.gender, Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      address: [this.address, Validators.required],
      phone: [this.phone, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      adults: [1, Validators.required],
      children: [0, Validators.required],
      baby: [0, Validators.required],
    });
  }

  get f() { return this.form.controls; }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  register(){     
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
      
    this.registerTrip = this.form.value;
    this.registerTrip.accountId = this.account.id;
    let ma = String(this.trip.tourId) + String(this.tour.tourGuideId) + String(this.trip.id) + String(this.trip.tourGuideId);
    // console.log('///////////////////////////');
    // console.log(ma);

    this.registerTrip.tripId = Number(this.id);
    this.registerTrip.maTour = Number(ma); 
    let total = Number(this.registerTrip.adults)*this.giaNguoiLon + Number(this.registerTrip.children)*this.giaTreEm + Number(this.registerTrip.baby)*this.giaEmBe;
    let total2 = total.toLocaleString();
    total2 = total2.split(',').join('.');
    this.registerTrip.totalMoney = total2;

    // console.log('----------this.registerTrip----------');
    // console.log(this.registerTrip);

    if(this.account.isCustomer){
      console.log("=========customer===========")
      this.customer = this.customerService.customerValue;
      this.registerTrip.email = this.customer.email;
      this.role = true;
      console.log(this.customer)
    }
    if(this.account.isTourGuide){
      console.log("=========tourGuide===========")
      this.tourGuide = this.tourGuideService.tourGuideValue;
      this.registerTrip.email = this.tourGuide.email;
      this.role = false;
      console.log(this.tourGuide)
    }

    if(this.registerTrip.adults > 0){
      this.tourService.registerTrip(this.registerTrip)
      .pipe(first())
            .subscribe({
                next: (registerTrip: any) => {
                  // console.log("------------------------------------");
                  // console.log(registerTrip);
                  this.alertService.success('Đăng ký thành công. Vui lòng thanh toán và chờ đợi người tổ chức chuyến đi xác nhận! (Nhấn nút cập nhật để xem chuyến đi mới đăng ký)', { keepAfterRouteChange: true });                                                                                                                                                         
                  if(this.role)
                  { 
                    this.router.navigate([`/customer/info/${this.account.id}/listRegisterTrip` ], { relativeTo: this.route });
                  }
                  else{
                    this.router.navigate([`/tourguide/info/${this.account.id}/listRegisterTrip` ], { relativeTo: this.route });
                  }
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
