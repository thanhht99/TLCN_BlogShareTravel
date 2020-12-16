import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerService, LoginService, AlertService } from '../../_services';
import { Tour, Account, TourGuide, RegisterTrip, Customer, Trip } from '../../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../../web-request.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerEditComponent implements OnInit {
  form: FormGroup;
  customer: Customer;
  account: Account;
  id: number;
  loading = false;
  submitted = false;
  sub: any;
  constructor(private customerService: CustomerService, 
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) 
  { 
    
    this.account = this.loginService.accountValue;
    // console.log("-------------account----------------");
    // console.log(this.account);

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

    if(this.account.isCustomer)
    { 
      this.customer = this.customerService.customerValue;
      // console.log("-------------customer---------------");
      // console.log(this.customer);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      address: [this.customer.address, Validators.required],
      cmnd: [this.customer.identity, [Validators.required, Validators.maxLength(12), Validators.minLength(9)]],
      email: [this.customer.email, [Validators.required, Validators.email]],
      phone: [this.customer.phone, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });

    // this.id = this.route.snapshot.params['id'];
    // console.log(this.id)
  }

  get f() { return this.form.controls; }

  edit(){
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.customer = this.form.value;
    this.customer.accountId = Number(this.id);
    // console.log(this.customer);
    this.customerService.updateCustomer(this.customer)
                            .pipe(first())
                                  .subscribe({
                                      next: (data) => {
                                        this.router.navigate([`/customer/info/${this.account.id}`]);
                                        this.alertService.success('Cập nhật thành công. Vui lòng nhấn nút cập nhật để xem thông tin vừa cập nhật!', { keepAfterRouteChange: true });
                                        // console.log(data);
                                      },
                                      error: error => {
                                          this.alertService.error('Cập nhật thất bại.!', { keepAfterRouteChange: true });
                                          this.loading = false;
                                      }
                                  });
  }

}
