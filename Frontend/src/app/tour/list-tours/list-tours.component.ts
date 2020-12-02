import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { TourService } from '../../_services';
import { Tour } from '../../models';

@Component({
  selector: 'app-list-tours',
  templateUrl: './list-tours.component.html',
  styleUrls: ['./list-tours.component.scss']
})
export class ListToursComponent implements OnInit {

  tours: Tour;

  constructor(private tourService: TourService) 
  { 
    //this.tourService.tour.subscribe(x => this.tour = x);
  }
  ngOnInit(): void {
    this.tourService.listTour()
            .pipe(first())
            .subscribe(tour => this.tours = tour);
  }

}
