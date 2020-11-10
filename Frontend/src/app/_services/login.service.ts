import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account } from '../models';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(private webRequestService: WebRequestService, 
              private router: Router, 
              private http: HttpClient) 
  { 
    this.accountSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('account')));
    this.account = this.accountSubject.asObservable();
  }

  public get accountValue(): Account {
    return this.accountSubject.value;
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

}
