import { Component, OnInit } from '@angular/core';
import { first, filter } from 'rxjs/operators';
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
  tours2: Tour[] = [];
  tour: [] = [];
  tourArray: Array<Tour>;
  start: boolean;
  p: number = 1;
  items = [];
  pageOfItems: Array<any>;
  tourName: any;
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

  }

  onChangePage(tourArray: Array<Tour>) {
    // update current page of items
    this.tourArray = tourArray;
  } 

  search(){
  }

}
