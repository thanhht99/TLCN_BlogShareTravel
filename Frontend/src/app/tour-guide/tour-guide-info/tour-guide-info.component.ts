import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, Location  } from '@angular/common';

import { LoginService, TourGuideService } from '../../_services';
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
  id: number;
  sub: any;

  constructor(private loginService: LoginService,
              private tourGuideService: TourGuideService, 
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) 
  {
    this.account = this.loginService.accountValue;

    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      // console.log(this.id)
      this.tourGuideService.infoTourGuide(this.id)
          .pipe(first())
          .subscribe(lists => {
            // console.log('--------------lists-------------');
            // console.log(lists);
            }
          );         
    });

    this.tourguide = this.tourGuideService.tourGuideValue;
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
  }

  reloadPage(){
    window.location.reload();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
