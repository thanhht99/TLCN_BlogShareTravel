import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../_services/login.service';
import { TourGuide } from '../models';
@Component({
  selector: 'app-tour-guide-info',
  templateUrl: './tour-guide-info.component.html',
  styleUrls: ['./tour-guide-info.component.scss']
})
export class TourGuideInfoComponent implements OnInit {

  tourguide: TourGuide;
  id: string;

  constructor(private loginService: LoginService, 
              private router: Router,
              private route: ActivatedRoute) 
  {
    this.tourguide = this.loginService.tourguideValue;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

}
