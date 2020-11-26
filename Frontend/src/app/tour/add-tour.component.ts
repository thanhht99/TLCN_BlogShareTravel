import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TourService, LoginService, AlertService } from '../_services';
import { Tour, Account } from '../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../web-request.service';


import * as _ from 'lodash';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddTourComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileInputLabel: string;
  form: FormGroup;
  tour: Tour;
  loading = false;
  submitted = false;
  account: Account;
  constructor(private http: HttpClient,
              private loginService: LoginService,
              private webRequestService: WebRequestService,
              private tourService: TourService, 
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private alertService: AlertService) 
  {
    this.loginService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {
    //readURL();
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      summary: ['', [Validators.required, Validators.maxLength(100)]],
      price: ['', Validators.required],
      time: ['', Validators.required],
      departureLocation: ['', Validators.required],
      destination: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  // onFileSelect(event) {
  //   const file = event.target.files[0];
  //   this.fileInputLabel = file.name;
  //   this.form.get('avatarPath').setValue(file);
  // }

  get f() { return this.form.controls; }

  createNewTour(){
      // if (!this.form.get('avatarPath').value) {
      //   alert('Please select an image!');
      //   return false;
      // }      
          
      this.submitted = true;
      this.alertService.clear();
      if (this.form.invalid) {
        return;
      }
      this.loading = true;
      
      this.tour = this.form.value;
      
      // const formData = new FormData();
      // formData.append('avatarPath', this.form.get('avatarPath').value);
      // formData.append('agentId', '007');

      console.log("---------------------formData-----------------------");      
      console.log(this.tour);

      // this.http
      // .post<any>('http://localhost:3000/tour/add', value123).subscribe(response => {
      //   console.log(response);
      //   if (response.statusCode === 200) {
      //     // Reset the file input
      //     this.uploadFileInput.nativeElement.value = "";
      //     this.fileInputLabel = undefined;
      //   }
      // }, er => {
      //   console.log(er);
      //   alert(er.error.error);
      // });
      
      this.tourService.createTour(this.tour)
                          .pipe(first())
                                .subscribe({
                                    next: (data) => {
                                      console.log(data);
                                      this.alertService.success('Add Tour successful. Thank you!', { keepAfterRouteChange: true });                                                                             
                                      this.router.navigate(['/tour/list'], { relativeTo: this.route });
                                    },
                                    error: er => {
                                      console.log(er);
                                      alert(er.error.error);
                                       // this.alertService.error('Add Tour Failed', { keepAfterRouteChange: true });
                                        this.loading = false;
                                    }
                                });

     
  }

}
