import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account, Tour, TourGuide } from '../models';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private tourSubject: BehaviorSubject<Tour>;
  public tour: Observable<Tour>;

  constructor(private webRequestService: WebRequestService, 
              private router: Router, 
              private http: HttpClient) 
  { 

    this.tourSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('tour')));
    this.tour = this.tourSubject.asObservable();

  }

  public get tourguideValue(): Tour {
    return this.tourSubject.value;
  }

  listTour() {
    return this.http.get<Tour>(`${this.webRequestService.ROOT_URL}/tour/list`)
      .pipe(map(tour => {
          localStorage.setItem('tour', JSON.stringify(tour));
          this.tourSubject.next(tour);
          return tour; 
      }));
  }


}
