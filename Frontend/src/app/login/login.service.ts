import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account.model';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public accounts: Account[];
  constructor(private webRequestService: WebRequestService, private router: Router) { }

  login(username: string, password: string) {
    return this.webRequestService.post('account/login', {username, password});
}


}
