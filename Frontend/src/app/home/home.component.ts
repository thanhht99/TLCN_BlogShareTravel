import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { LoginService, TourService } from '../_services';
import { Tour, Account } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  account: Account;
  tours: Tour;
  constructor(private loginService: LoginService,
              private tourService: TourService,) 
  {
      this.account = this.loginService.accountValue;
  }

  ngOnInit(): void {
    this.tourService.listHome()
            .pipe(first())
            .subscribe((tour) => {
              this.tours = tour
            });   

    this.tours = this.tourService.tourHomeValue;
    // console.log(this.tours);
  }

}
