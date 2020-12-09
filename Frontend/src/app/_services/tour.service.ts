import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account, Tour, Trip, RegisterTrip, Blog } from '../models';
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

  private imageForTourSubject: BehaviorSubject<Tour>;
  public imageForTour: Observable<Tour>;

  private blogSubject: BehaviorSubject<Blog>;
  public blog: Observable<Blog>;

  constructor(private webRequestService: WebRequestService, 
              private router: Router, 
              private http: HttpClient) 
  { 

    this.tourSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('tour')));
    this.tour = this.tourSubject.asObservable();

    this.tripSubject = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('trip')));
    this.trip = this.tripSubject.asObservable();

    this.imageForTourSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('imageForTour')));
    this.imageForTour = this.imageForTourSubject.asObservable();

    this.blogSubject = new BehaviorSubject<Blog>(JSON.parse(localStorage.getItem('blog')));
    this.blog = this.blogSubject.asObservable();

  }

  public get imageForTourValue(): Tour {
    return this.imageForTourSubject.value;
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
          console.log(tour);
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
    return this.http.get<Trip>(`${this.webRequestService.ROOT_URL}/tour/${id}/trip`)
      .pipe(map(trip => {
          localStorage.setItem('trip', JSON.stringify(trip));
          this.tripSubject.next(trip);
          //console.log(trip);
          return trip; 
      }));
  }

  getBlogById(id: number) {
    return this.http.get<Blog>(`${this.webRequestService.ROOT_URL}/blog/${id}`)
      .pipe(map(blog => {
          localStorage.setItem('blog', JSON.stringify(blog));
          this.blogSubject.next(blog);
          return blog; 
      }));
  }

  infoTour(id: number) {
    return this.http.get<Tour>(`${this.webRequestService.ROOT_URL}/tour/info/${id}`)
      .pipe(map(imageForTour => {
          localStorage.setItem('imageForTour', JSON.stringify(imageForTour));
          this.imageForTourSubject.next(imageForTour);
          return imageForTour; 
      }));
  }

  createTour(tour: Tour){
    return this.webRequestService.post('tour/add', tour);
  }

  addImage(image: FormData, id: number){  
    return this.http.post<any>(`${this.webRequestService.ROOT_URL}/tour/addImage/${id}`, image);
  }

  addTrip(trip: Trip, id: number){  
    return this.http.post<any>(`${this.webRequestService.ROOT_URL}/tour/addTrip/${id}`, trip);
  }

  registerTrip(registerTrip: RegisterTrip){
    return this.webRequestService.post('tour/registerTrip', registerTrip);
  }

}
