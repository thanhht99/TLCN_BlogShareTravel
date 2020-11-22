import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TourService } from '../_services';
import { Tour } from '../models';

import { first } from 'rxjs/operators';

import { AlertService } from '../_services';
@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss']
})
export class AddTourComponent implements OnInit {

  form: FormGroup;
  tour: Tour;
  loading = false;
  submitted = false;

  constructor(private tourService: TourService, 
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      summary: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', Validators.required],
      time: ['', Validators.required],
      departureLocation: ['', Validators.required],
      destination: ['', Validators.required],
      amount: ['', Validators.required],
      avatarPath: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

}
