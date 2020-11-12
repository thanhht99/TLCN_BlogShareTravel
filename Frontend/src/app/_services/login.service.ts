import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account, Customer, TourGuide } from '../models';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;
  
  private customerSubject: BehaviorSubject<Customer>;
  public customer: Observable<Customer>;

  private tourguideSubject: BehaviorSubject<TourGuide>;
  public tourguide: Observable<TourGuide>;

  constructor(private webRequestService: WebRequestService, 
              private router: Router, 
              private http: HttpClient) 
  { 
    this.accountSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('account')));
    this.account = this.accountSubject.asObservable();

    this.customerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('customer')));
    this.customer = this.customerSubject.asObservable();

    this.tourguideSubject = new BehaviorSubject<TourGuide>(JSON.parse(localStorage.getItem('tourguide')));
    this.tourguide = this.tourguideSubject.asObservable();
  }

  public get accountValue(): Account {
    return this.accountSubject.value;
  }

  public get customerValue(): Customer {
    return this.customerSubject.value;
  }

  public get tourguideValue(): TourGuide {
    return this.tourguideSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<Account>(`${this.webRequestService.ROOT_URL}/account/login`, {username, password})
      .pipe(map(account => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('account', JSON.stringify(account));
          this.accountSubject.next(account);
          return account; 
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('account');
    this.accountSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  infoCustomer(id: number) {
    return this.http.get<Customer>(`${this.webRequestService.ROOT_URL}/customer/info/${id}`)
      .pipe(map(customer => {
          localStorage.setItem('customer', JSON.stringify(customer));
          this.customerSubject.next(customer);
          return customer; 
      }));
  }

  infoTourGuide(id: number) {
    return this.http.get<TourGuide>(`${this.webRequestService.ROOT_URL}/tourguide/info/${id}`)
      .pipe(map(tourguide => {
          localStorage.setItem('tourguide', JSON.stringify(tourguide));
          this.tourguideSubject.next(tourguide);
          return tourguide; 
      }));
  }

}
