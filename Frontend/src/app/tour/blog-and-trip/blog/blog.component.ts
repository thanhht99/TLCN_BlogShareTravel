import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe, Location  } from '@angular/common';
import { first } from 'rxjs/operators';
import { Trip, Tour, Account, Blog } from '../../../models';
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
  blogs: Blog;
  blog: Blog;
  loading = false;
  submitted = false;

  sub: any;
  id: number;

  status: boolean;

  constructor(private tourService: TourService, 
              private loginService: LoginService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  { 
    this.status = false;
    this.loginService.account.subscribe(x => this.account = x);

    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      this.tourService.getBlogById(id)
            .pipe(first())
            .subscribe(blog => {       
              if(typeof blog === 'object'){
                this.status = true;
              }              
              // console.log(this.status);
              this.blog = blog;
            });              

    }); 

    this.tourService.tour.subscribe(a => this.tours = a);
    for(let i in this.tours) {
      if(this.tours[i].id === this.id)
      { 
        this.tour = this.tours[i];
      }      
    }

  }

  ngOnInit(): void {    
    this.tourService.blog.subscribe(a => this.blog = a);
    //console.log('--------------blog-------------');
    //console.log(this.blog);

  }

  pageRefresh() {     
    location.reload();
  }
}
