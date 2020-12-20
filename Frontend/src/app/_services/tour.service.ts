import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Account, Tour, Trip, RegisterTrip, Blog } from '../models';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  public tours: Tour[];

  private tourSubject: BehaviorSubject<Tour>;
  public tour: Observable<Tour>;

  private tourDaDuyetSubject: BehaviorSubject<Tour>;
  public tourDaDuyet: Observable<Tour>;

  private tourChuaDuyetSubject: BehaviorSubject<Tour>;
  public tourChuaDuyet: Observable<Tour>;

  private tripSubject: BehaviorSubject<Trip>;
  public trip: Observable<Trip>;

  private imageForTourSubject: BehaviorSubject<Tour>;
  public imageForTour: Observable<Tour>;

  private blogSubject: BehaviorSubject<Blog>;
  public blog: Observable<Blog>;

  private registertripChuaDuyetSubject: BehaviorSubject<RegisterTrip>;
  public registertripChuaDuyet: Observable<RegisterTrip>;

  private registertripDaDuyetSubject: BehaviorSubject<RegisterTrip>;
  public registertripDaDuyet: Observable<RegisterTrip>;

  constructor(private webRequestService: WebRequestService, 
              private router: Router, 
              private http: HttpClient) 
  { 

    this.tourSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('tour')));
    this.tour = this.tourSubject.asObservable();

    this.tourDaDuyetSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('tourDaDuyet')));
    this.tourDaDuyet = this.tourDaDuyetSubject.asObservable();
    
    this.tourChuaDuyetSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('tourChuaDuyet')));
    this.tourChuaDuyet = this.tourChuaDuyetSubject.asObservable();

    this.tripSubject = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('trip')));
    this.trip = this.tripSubject.asObservable();

    this.imageForTourSubject = new BehaviorSubject<Tour>(JSON.parse(localStorage.getItem('imageForTour')));
    this.imageForTour = this.imageForTourSubject.asObservable();

    this.blogSubject = new BehaviorSubject<Blog>(JSON.parse(localStorage.getItem('blog')));
    this.blog = this.blogSubject.asObservable();

    this.registertripChuaDuyetSubject = new BehaviorSubject<RegisterTrip>(JSON.parse(localStorage.getItem('registertripChuaDuyet')));
    this.registertripChuaDuyet = this.registertripChuaDuyetSubject.asObservable();

    this.registertripDaDuyetSubject = new BehaviorSubject<RegisterTrip>(JSON.parse(localStorage.getItem('registertripDaDuyet')));
    this.registertripDaDuyet = this.registertripDaDuyetSubject.asObservable();

  }

  public get imageForTourValue(): Tour {
    return this.imageForTourSubject.value;
  }

  public get tourValue(): Tour {
    return this.tourSubject.value;
  }

  public get tourDaDuyetValue(): Tour {
    return this.tourDaDuyetSubject.value;
  }

  public get tourChuaDuyetValue(): Tour {
    return this.tourChuaDuyetSubject.value;
  }

  public get tripValue(): Trip {
    return this.tripSubject.value;
  }

  public get registertripChuaDuyetValue(): RegisterTrip {
    return this.registertripChuaDuyetSubject.value;
  }

  public get registertripDaDuyetValue(): RegisterTrip {
    return this.registertripDaDuyetSubject.value;
  }

  listTour() {
    return this.http.get<Tour>(`${this.webRequestService.ROOT_URL}/tour/list`)
      .pipe(map(tour => {
          localStorage.setItem('tour', JSON.stringify(tour));
          this.tourSubject.next(tour);
          // console.log(tour);
          return tour; 
      }));
  }

  listHome() {
    return this.http.get<Tour>(`${this.webRequestService.ROOT_URL}/tour/listHome`)
      .pipe(map(tour => {
          localStorage.setItem('tour', JSON.stringify(tour));
          this.tourSubject.next(tour);
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

  listTripChuaDuyet(id: number) {
    return this.http.get<RegisterTrip>(`${this.webRequestService.ROOT_URL}/registerTrip/listChuaDuyet/${id}`)
      .pipe(map(registertripChuaDuyet => {
          localStorage.setItem('registertripChuaDuyet', JSON.stringify(registertripChuaDuyet));
          this.registertripChuaDuyetSubject.next(registertripChuaDuyet);
          return registertripChuaDuyet; 
      }));
  }

  listTripDaDuyet(id: number) {
    return this.http.get<RegisterTrip>(`${this.webRequestService.ROOT_URL}/registerTrip/listDaDuyet/${id}`)
      .pipe(map(registertripDaDuyet => {
          localStorage.setItem('registertripDaDuyet', JSON.stringify(registertripDaDuyet));
          this.registertripDaDuyetSubject.next(registertripDaDuyet);
          return registertripDaDuyet; 
      }));
  }

  listTourDaDuyet(id: number) {
    return this.http.get<Tour>(`${this.webRequestService.ROOT_URL}/tour/${id}/listDaDuyet`)
      .pipe(map(tourDaDuyet => {
          localStorage.setItem('tourDaDuyet', JSON.stringify(tourDaDuyet));
          this.tourDaDuyetSubject.next(tourDaDuyet);
          return tourDaDuyet; 
      }));
  }

  listTourChuaDuyet(id: number) {
    return this.http.get<Tour>(`${this.webRequestService.ROOT_URL}/tour/${id}/listChuaDuyet`)
      .pipe(map(tourChuaDuyet => {
          localStorage.setItem('tourChuaDuyet', JSON.stringify(tourChuaDuyet));
          this.tourChuaDuyetSubject.next(tourChuaDuyet);
          return tourChuaDuyet; 
      }));
  }

  getTripById(id: number) {
    return this.http.get<Trip>(`${this.webRequestService.ROOT_URL}/tour/${id}/trip`)
      .pipe(map(trip => {
          localStorage.setItem('trip', JSON.stringify(trip));
          this.tripSubject.next(trip);
          // console.log(trip);
          return trip; 
      }));
      // catchError((error) => {
      //     this.tourChuaDuyetSubject.next(null);
      //     console.log(error);
      //     return error; 
      // }));
  }

  getBlogById(id: number) {
    return this.http.get<Blog>(`${this.webRequestService.ROOT_URL}/blog/${id}`)
      .pipe(map(blog => {
          localStorage.setItem('blog', JSON.stringify(blog));
          this.blogSubject.next(blog);
          // console.log(blog);
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
