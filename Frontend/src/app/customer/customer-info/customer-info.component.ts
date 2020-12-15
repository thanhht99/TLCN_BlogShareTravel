import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService, CustomerService } from '../../_services';
import { Customer,Account } from '../../models';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer;
  account: Account;
  id: number;
 
  constructor(private loginService: LoginService, 
              private customerService: CustomerService, 
              private router: Router,
              private route: ActivatedRoute) 
  {
    this.customer = this.customerService.customerValue;
    this.account = this.loginService.accountValue;
      // console.log(this.account)
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];

    //this.customer = this.loginService.infoCustomer(this.id);
  }

  
}
