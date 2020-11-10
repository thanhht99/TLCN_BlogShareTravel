import { Component } from '@angular/core';

import { LoginService } from './_services/login.service';
import { Account } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Share Blog Travel';
  account: Account;

  constructor(private loginService: LoginService) {
      this.loginService.account.subscribe(x => this.account = x);
  }

  logout() {
      this.loginService.logout();
  }
}
