import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../_services/login.service';
import { Account } from '../../models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  account: Account;
  constructor(private loginService: LoginService) 
  {
    this.loginService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {

  }

  logout() {
    this.loginService.logout();
  }

}
