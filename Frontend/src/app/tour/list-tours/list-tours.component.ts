import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { TourService, LoginService } from '../../_services';
import { Tour, Account } from '../../models';

@Component({
  selector: 'app-list-tours',
  templateUrl: './list-tours.component.html',
  styleUrls: ['./list-tours.component.scss']
})
export class ListToursComponent implements OnInit {
  loading = false;
  submitted = false;
  account: Account;
  tours: Tour;
  start: boolean;

  constructor(private tourService: TourService, 
              private loginService: LoginService) 
  { 
    this.loginService.account.subscribe(x => this.account = x);
    this.start = true;
    //this.tourService.tour.subscribe(x => this.tour = x);
  }
  ngOnInit(): void {
    this.tourService.listTour()
            .pipe(first())
            .subscribe(tour => this.tours = tour);
  }

}
