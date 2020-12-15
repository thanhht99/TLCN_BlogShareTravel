import { Component, OnInit } from '@angular/core';
import { CustomerService, LoginService, AlertService } from '../_services';
import { Tour, Account, TourGuide, RegisterTrip, Customer, Trip } from '../models';

@Component({
  selector: 'app-detail-register-trip',
  templateUrl: './detail-register-trip.component.html',
  styleUrls: ['./detail-register-trip.component.scss']
})
export class DetailRegisterTripComponent implements OnInit {

  account: Account;
  id: number;
  constructor(private customerService: CustomerService, 
              private alertService: AlertService,
              private loginService: LoginService,) 
  { 
    this.account = this.loginService.accountValue;
  }

  ngOnInit(): void {
  }

}
