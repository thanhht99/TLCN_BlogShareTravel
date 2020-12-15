import { Customer } from "./../models/customer.model";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account.model';
import { WebRequestService } from '../web-request.service';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
    public customers: Customer[];

    private customerSubject: BehaviorSubject<Customer>;
    public customer: Observable<Customer>;
    constructor(private webRequestService: WebRequestService, 
                private router: Router, 
                private http: HttpClient) 
    { 
      this.customerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('customer')));
      this.customer = this.customerSubject.asObservable();
    }

    public get customerValue(): Customer {
      return this.customerSubject.value;
    }

    infoCustomer(id: number) {
      return this.http.get<Customer>(`${this.webRequestService.ROOT_URL}/customer/info/${id}`)
        .pipe(map(customer => {
            localStorage.setItem('customer', JSON.stringify(customer));
            this.customerSubject.next(customer);
            return customer; 
        }));
    }
  
    updateCustomer(customer: Customer){    
        return this.webRequestService.post('customer/info/update', customer);
    }
  }