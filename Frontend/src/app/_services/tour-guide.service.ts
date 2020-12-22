import { TourGuide, Trip } from "./../models";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account.model';
import { WebRequestService } from '../web-request.service';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class TourGuideService {
    public tourGuides: TourGuide[];

    private tourGuideSubject: BehaviorSubject<TourGuide>;
    public tourGuide: Observable<TourGuide>;

    private listTripSubject: BehaviorSubject<Trip>;
    public listTrip: Observable<Trip>;

    constructor(private webRequestService: WebRequestService, 
                private router: Router, 
                private http: HttpClient) 
    { 
      this.tourGuideSubject = new BehaviorSubject<TourGuide>(JSON.parse(localStorage.getItem('tourGuide')));
      this.tourGuide = this.tourGuideSubject.asObservable();

      this.listTripSubject = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('listTrip')));
      this.listTrip = this.listTripSubject.asObservable();
    }

    public get tourGuideValue(): TourGuide {
      return this.tourGuideSubject.value;
    }

    public get listTripValue(): Trip {
      return this.listTripSubject.value;
    }

    infoTourGuide(id: number) {
      return this.http.get<TourGuide>(`${this.webRequestService.ROOT_URL}/tourguide/info/${id}`)
        .pipe(map(tourGuide => {
            localStorage.setItem('tourGuide', JSON.stringify(tourGuide));
            this.tourGuideSubject.next(tourGuide);
            return tourGuide; 
        }));
    }
  
    updateTourGuide(tourGuide: TourGuide){    
        return this.webRequestService.post('tourguide/info/update', tourGuide);
    }


    listTripByTourGuideId(id: number) {
      return this.http.get<Trip>(`${this.webRequestService.ROOT_URL}/tourguide/${id}/trip`)
        .pipe(map(listTrip => {
            localStorage.setItem('listTrip', JSON.stringify(listTrip));
            this.listTripSubject.next(listTrip);
            return listTrip; 
        }));
    }
  }