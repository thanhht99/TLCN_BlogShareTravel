import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject, Observable } from 'rxjs';

import { LoginService } from '../../_services/login.service';
import { Account } from '../../models/account.model';
import { first } from 'rxjs/operators';
import { AlertService } from '../../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(  private loginService: LoginService,
                private router: Router,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private alertService: AlertService
  ) 
  { 
    this.accountSubject = new BehaviorSubject<Account>(null);
    this.account = this.accountSubject.asObservable();
  }

  public get accountValue(): Account {
      return this.accountSubject.value;
  }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.loginService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: (account: any) => {
                // this.alertService.success('Logged in successfully!!!. Wish you have a great experience on our website...', { keepAfterRouteChange: true });
                
                // get return url from query parameters or default to home page
                // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                // this.router.navigateByUrl(returnUrl);
                if(account.isCustomer == true)
                {
                  // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  // this.router.navigateByUrl(returnUrl);
                  
                  //console.log(account);
                  
                  this.router.navigate(['/home'], { relativeTo: this.route });
                  this.loginService.infoCustomer(account.id)
                    .pipe(first())
                    .subscribe({
                    next: (data: any) =>{console.log(data);},
                    error: error => {
                      this.alertService.error('Customer not found', { keepAfterRouteChange: true });
                    }
                  });
                }
                if(account.isTourGuide == true)
                {
                  this.router.navigate(['/home'], { relativeTo: this.route });
                  this.loginService.infoTourGuide(account.id)
                    .pipe(first())
                    .subscribe({
                    next: (data: any) =>{},
                    error: error => {
                      this.alertService.error('Tour Guide not found', { keepAfterRouteChange: true });
                    }
                  });
                }
            },
            error: error => {
                this.alertService.error('Account or password is incorrect', { keepAfterRouteChange: true });
                this.loading = false;
            }
        });
  }

}
