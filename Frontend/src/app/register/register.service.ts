import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private webRequestService: WebRequestService, private router: Router) { }

  createAccount(name: String, email: String, username: String, password: String, confirmpassword: String, isTourGuide: Boolean, isCustomer: Boolean){    
      return this.webRequestService.post('account/register', {name, email, username, password, confirmpassword, isTourGuide, isCustomer});
  }
}
