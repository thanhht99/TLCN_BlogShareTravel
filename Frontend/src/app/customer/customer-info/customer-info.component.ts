import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService, CustomerService } from '../../_services';
import { Customer,Account } from '../../models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer;
  account: Account;
  id: number;
  sub: any;
  constructor(private loginService: LoginService, 
              private customerService: CustomerService, 
              private router: Router,
              private route: ActivatedRoute) 
  {
    this.account = this.loginService.accountValue;
      // console.log(this.account)

    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      // console.log(this.id)
      this.customerService.infoCustomer(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );         
    });

    this.customer = this.customerService.customerValue;

  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];

    //this.customer = this.loginService.infoCustomer(this.id);
  }


  reloadPage(){
    window.location.reload();
  }

  
}
