import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { TourService } from '../_services';
import { Trip } from '../models';


@Component({
  selector: 'app-blog-and-trip',
  templateUrl: './blog-and-trip.component.html',
  styleUrls: ['./blog-and-trip.component.scss']
})
export class BlogAndTripComponent implements OnInit {

  trips: Trip;
  id: number;

  constructor(private tourService: TourService, 
              private router: Router,
              private route: ActivatedRoute) 
  { 

  }

  ngOnInit(): void {
    this.id = this.id = this.route.snapshot.params['id'];
    
    this.tourService.getTripById(this.id)
            .pipe(first())
            .subscribe(trip => this.trips = trip);
  }

}
