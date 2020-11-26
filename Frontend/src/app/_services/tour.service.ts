import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account, Tour, Trip } from '../models';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  public tours: Tour[];

  private tourSubject: BehaviorSubject<Tour>;
  public tour: Observable<Tour>;

  private tripSubject: BehaviorSubject<Trip>;
  public trip: Observable<Trip>;

  constructor(private webRequestService: WebRequestService, 
              private router: Router, 
              private http: HttpClient) 
  { 

    this.tourSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('tour')));
    this.tour = this.tourSubject.asObservable();

    this.tripSubject = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('trip')));
    this.trip = this.tripSubject.asObservable();

  }

  public get tourValue(): Tour {
    return this.tourSubject.value;
  }

  public get tripValue(): Trip {
    return this.tripSubject.value;
  }

  listTour() {
    return this.http.get<Tour>(`${this.webRequestService.ROOT_URL}/tour/list`)
      .pipe(map(tour => {
          localStorage.setItem('tour', JSON.stringify(tour));
          this.tourSubject.next(tour);
          //console.log(tour);
          return tour; 
      }));
  }

  listTrip() {
    return this.http.get<Trip>(`${this.webRequestService.ROOT_URL}/tour/trip`)
      .pipe(map(trip => {
          localStorage.setItem('trip', JSON.stringify(trip));
          this.tripSubject.next(trip);
          //console.log(trip);
          return trip; 
      }));
  }

  getTripById(id: number) {
    return this.http.get<Trip>(`${this.webRequestService.ROOT_URL}/tour/${id}/blog&trip`)
      .pipe(map(trip => {
          localStorage.setItem('trip', JSON.stringify(trip));
          this.tripSubject.next(trip);
          //console.log(trip);
          return trip; 
      }));
  }

  createTour(tour: Tour){   
    console.log("Dang chay createTour"); 
    return this.webRequestService.post('tour/add', tour);
  }

  addImage(image: FormData){  
    return this.webRequestService.post('tour/addImage', image);
  }

}
