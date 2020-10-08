import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private webRequestService: WebRequestService) { }

  createUser(name: string, email: string, avatarPath: string, username: string, password: string){
    return this.webRequestService.post('users/register', {name, email, avatarPath, username, password});
  }
}
