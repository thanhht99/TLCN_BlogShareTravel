import { Component, OnInit } from '@angular/core';

import { LoginService } from '../_services/login.service';
import { Account } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  account: Account;

  constructor(private loginService: LoginService) {
      this.account = this.loginService.accountValue;
  }

  ngOnInit(): void {
  }

}
