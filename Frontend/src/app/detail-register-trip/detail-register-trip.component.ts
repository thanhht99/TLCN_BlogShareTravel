import { Component, OnInit } from '@angular/core';
import { CustomerService, LoginService, AlertService, TourService } from '../_services';
import { Tour, Account, TourGuide, RegisterTrip, Customer, Trip } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, Location  } from '@angular/common';

@Component({
  selector: 'app-detail-register-trip',
  templateUrl: './detail-register-trip.component.html',
  styleUrls: ['./detail-register-trip.component.scss']
})
export class DetailRegisterTripComponent implements OnInit {

  tour: Tour;
  account: Account;
  tourGuide: TourGuide;
  customer: Customer;
  id: number;
  sub: any;
  listChuaDuyets: RegisterTrip;
  listDaDuyets: RegisterTrip;
  detail: RegisterTrip;
  constructor(private customerService: CustomerService, 
              private tourService: TourService,
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) 
  { 
    this.account = this.loginService.accountValue;
    // console.log("--------------account---------------")
    // console.log(this.account)
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      // console.log(this.id)
    });

    this.listChuaDuyets = this.tourService.registertripChuaDuyetValue;
    // console.log('--------------listChuaDuyet-------------');
    // console.log(this.listChuaDuyets);
    for(let i in this.listChuaDuyets) {
      if(this.listChuaDuyets[i].id === this.id)
      { 
        this.detail = this.listChuaDuyets[i];
      }      
    }

    this.listDaDuyets = this.tourService.registertripDaDuyetValue;
    // console.log('--------------listDaDuyets-------------');
    // console.log(this.listDaDuyets);
    for(let i in this.listDaDuyets) {
      if(this.listDaDuyets[i].id === this.id)
      { 
        this.detail = this.listDaDuyets[i];
      }      
    }
    // console.log('--------------detail-------------');
    // console.log(this.detail);




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
