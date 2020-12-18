import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe, Location  } from '@angular/common';

import { TourGuideService, LoginService, AlertService,CustomerService } from '../../_services';
import { Tour, Account, TourGuide, RegisterTrip, Customer, Trip } from '../../models';

import { first } from 'rxjs/operators';
import { WebRequestService } from '../../web-request.service';

@Component({
  selector: 'app-tour-guide-edit',
  templateUrl: './tour-guide-edit.component.html',
  styleUrls: ['./tour-guide-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TourGuideEditComponent implements OnInit {
  form: FormGroup;
  tourGuide: TourGuide;
  account: Account;
  id: number;
  loading = false;
  submitted = false;
  sub: any;
  constructor(private tourGuideService: TourGuideService, 
              private alertService: AlertService,
              private loginService: LoginService,
              private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) 
  { 
    this.account = this.loginService.accountValue;
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      console.log(this.id)
      this.tourGuideService.infoTourGuide(this.id)
          .pipe(first())
          .subscribe(lists => {
            }
          );         
    });
    if(this.account.isTourGuide)
    { 
      this.tourGuide = this.tourGuideService.tourGuideValue;
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      address: [this.tourGuide.address, Validators.required],
      language: [this.tourGuide.language, Validators.required],
      cmnd: [this.tourGuide.identity, [Validators.required, Validators.maxLength(12), Validators.minLength(9)]],
      email: [this.tourGuide.email, [Validators.required, Validators.email]],
      phone: [this.tourGuide.phone, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  get f() { return this.form.controls; }

  edit(){
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.tourGuide = this.form.value;
    this.tourGuide.accountId = Number(this.id);
    console.log(this.tourGuide);
    this.customerService.updateCustomer(this.tourGuide)
                            .pipe(first())
                                  .subscribe({
                                      next: (data) => {
                                        //this.router.navigate([`/tourguide/info/${this.account.id}`]);
                                        this.alertService.success('Cập nhật thành công. Vui lòng nhấn nút cập nhật để xem thông tin vừa cập nhật!', { keepAfterRouteChange: true });
                                        // console.log(data);
                                      },
                                      error: error => {
                                          this.alertService.error('Cập nhật thất bại.!', { keepAfterRouteChange: true });
                                          this.loading = false;
                                      }
                                  });
  }

}
