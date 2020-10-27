import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account.model';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public accounts: Account[];
  constructor(private webRequestService: WebRequestService, private router: Router) { }

  createAccount(account: Account){    
      return this.webRequestService.post('account/register', account);
  }
}
