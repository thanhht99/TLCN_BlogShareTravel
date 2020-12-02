import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../_services/login.service';
import { Customer } from '../../models';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer;
  id: string;
  
  constructor(private loginService: LoginService, 
              private router: Router,
              private route: ActivatedRoute) 
  {
      this.customer = this.loginService.customerValue;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //this.customer = this.loginService.infoCustomer(this.id);
  }

  
}
