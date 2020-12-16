import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { TourService, LoginService } from '../../_services';
import { Tour, Account } from '../../models';

// import { JwPaginationModule } from 'jw-angular-pagination';


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
  tour: Tour;
  tourArray: Array<Tour>;
  start: boolean;

  items = [];
  pageOfItems: Array<any>;

  constructor(private tourService: TourService, 
              private loginService: LoginService) 
  { 
    this.loginService.account.subscribe(x => this.account = x);
    this.start = true;
  }
  ngOnInit(): void {
    this.tourService.listTour()
            .pipe(first())
            .subscribe((tour) => {
              this.tours = tour
            });   

    this.tours = this.tourService.tourValue;
    // console.log("------tour-----")
    // console.log(this.tours)
    // console.log("------tours-----")
    // console.log(this.tours)

    // this.tourArray = [this.tours];
    // console.log("------tourArray-----")
    // console.log(this.tourArray)

    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    // console.log(this.items)
  }

  onChangePage(tourArray: Array<Tour>) {
    // update current page of items
    this.tourArray = tourArray;
} 

}
