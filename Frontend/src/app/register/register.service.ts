import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private webRequestService: WebRequestService) { }

  createAccount(name: string, email: string, username: string, password: string){
    return this.webRequestService.post('account/register', {name, email, username, password});
  }
}
