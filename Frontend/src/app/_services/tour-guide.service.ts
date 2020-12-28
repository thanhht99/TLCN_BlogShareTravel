import { TourGuide, Trip, RegisterTrip } from "./../models";
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

    private listDetailTripSubject: BehaviorSubject<RegisterTrip>;
    public listDetailTrip: Observable<RegisterTrip>;

    private listDetailTripDaThanhToanSubject: BehaviorSubject<RegisterTrip>;
    public listDetailTripDaThanhToan: Observable<RegisterTrip>;

    private detailTripByIdSubject: BehaviorSubject<Trip>;
    public detailTripById: Observable<Trip>;

    constructor(private webRequestService: WebRequestService, 
                private router: Router, 
                private http: HttpClient) 
    { 
      this.tourGuideSubject = new BehaviorSubject<TourGuide>(JSON.parse(localStorage.getItem('tourGuide')));
      this.tourGuide = this.tourGuideSubject.asObservable();

      this.listTripSubject = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('listTrip')));
      this.listTrip = this.listTripSubject.asObservable();

      this.listDetailTripSubject = new BehaviorSubject<RegisterTrip>(JSON.parse(localStorage.getItem('listDetailTrip')));
      this.listDetailTrip = this.listDetailTripSubject.asObservable();

      this.listDetailTripDaThanhToanSubject = new BehaviorSubject<RegisterTrip>(JSON.parse(localStorage.getItem('listDetailTripDaThanhToan')));
      this.listDetailTripDaThanhToan = this.listDetailTripDaThanhToanSubject.asObservable();

      this.detailTripByIdSubject = new BehaviorSubject<Trip>(JSON.parse(localStorage.getItem('detailTripById')));
      this.detailTripById = this.detailTripByIdSubject.asObservable();
    }

    public get tourGuideValue(): TourGuide {
      return this.tourGuideSubject.value;
    }

    public get listTripValue(): Trip {
      return this.listTripSubject.value;
    }

    public get listDetailTripValue(): RegisterTrip {
      return this.listDetailTripSubject.value;
    }

    public get listDetailTripDaThanhToanValue(): RegisterTrip {
      return this.listDetailTripDaThanhToanSubject.value;
    }

    public get detailTripByIdValue(): Trip {
      return this.detailTripByIdSubject.value;
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

    listKhachHangDangKyTour(id: number) {
      this.listDetailTripSubject.next(null);
      return this.http.get<RegisterTrip>(`${this.webRequestService.ROOT_URL}/tourguide/detailTrip/${id}`)
        .pipe(map(listDetailTrip => {
            localStorage.setItem('listDetailTrip', JSON.stringify(listDetailTrip));
            this.listDetailTripSubject.next(listDetailTrip);
            return listDetailTrip; 
        }));
    }

    listKhachHangDangKyTourDaThanhToan(id: number) {
      this.listDetailTripDaThanhToanSubject.next(null);
      return this.http.get<RegisterTrip>(`${this.webRequestService.ROOT_URL}/tourguide/detailTripDaThanhToan/${id}`)
        .pipe(map(listDetailTripDaThanhToan => {
            localStorage.setItem('listDetailTripDaThanhToan', JSON.stringify(listDetailTripDaThanhToan));
            this.listDetailTripDaThanhToanSubject.next(listDetailTripDaThanhToan);
            return listDetailTripDaThanhToan; 
        }));
    }

    getDetailTripById(id: number) {
      this.detailTripByIdSubject.next(null);
      return this.http.get<Trip>(`${this.webRequestService.ROOT_URL}/tourguide/detailTripById/${id}`)
        .pipe(map(detailTripById => {
            localStorage.setItem('detailTripById', JSON.stringify(detailTripById));
            this.detailTripByIdSubject.next(detailTripById);
            return detailTripById; 
        }));
    }

    duyetKhachhang(id: number){
      console.log(id);
      return this.http.get(`${this.webRequestService.ROOT_URL}/registerTrip/duyet/${id}`);
    }





  }