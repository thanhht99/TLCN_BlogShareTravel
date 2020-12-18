import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../_services/login.service';
import { TourGuide,Account } from '../../models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tour-guide-info',
  templateUrl: './tour-guide-info.component.html',
  styleUrls: ['./tour-guide-info.component.scss']
})
export class TourGuideInfoComponent implements OnInit {

  tourguide: TourGuide;
  account: Account;
  id: string;

  constructor(private loginService: LoginService, 
              private router: Router,
              private route: ActivatedRoute) 
  {
    this.account = this.loginService.accountValue;

    this.tourguide = this.loginService.tourguideValue;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  reloadPage(){
    window.location.reload();
  }


}
