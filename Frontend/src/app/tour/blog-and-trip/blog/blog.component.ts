import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';
import { Trip, Tour, Account, TourGuide } from '../../../models';
import { TourService, LoginService, AlertService } from '../../../_services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  account: Account;
  tours: Tour;
  tour: Tour;
  loading = false;
  submitted = false;

  sub: any;
  id: number;

  constructor(private tourService: TourService, 
              private loginService: LoginService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,) 
  { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;                  
    }); 
    this.tourService.tour.subscribe(a => this.tours = a);
    for(let i in this.tours) {
      if(this.tours[i].id === this.id)
      { 
        this.tour = this.tours[i];
      }
    }
    //console.log(this.tour)
  }

  ngOnInit(): void {

  }

}
