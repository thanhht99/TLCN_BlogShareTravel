import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterService } from '../_services/register.service';
import { Account } from '../models/account.model';
import { first } from 'rxjs/operators';

import { AlertService } from '../_services';

import { MustMatch } from '../_helpers';

// import $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

    form: FormGroup;
    account: Account;
    loading = false;
    submitted = false;
    
    constructor(private registerService: RegisterService, 
                private router: Router,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private alertService: AlertService) 
    {   
      
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
          fullname: ['', Validators.required],
          email:    ['', [Validators.required, Validators.email]],
          username: ['', Validators.required],
          accountType: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
        },
        {
          validator: MustMatch('password', 'confirmPassword')
        }
      );
    }

    get f() { return this.form.controls; }
    
    createNewAccount(){
      // let account = new Account();
      //     account.fullname = this.fullname;
      //     account.email = this.email;
      //     account.username = this.username;
      //     account.password = this.password;
      //     account.confirmpassword = this.confirmpassword;       
   

        //console.log(this.account);

        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
          return;
        }
        this.loading = true;
        this.account = this.form.value;
          
        if(this.form.value.accountType == 'customer')
        { 
            this.account.isCustomer = true;
            this.account.isTourGuide = false;
        }
        if(this.form.value.accountType == 'tourguide')
        { 
            this.account.isCustomer = false;
            this.account.isTourGuide = true;
        }
        this.registerService.createAccount(this.account)
                            .pipe(first())
                                  .subscribe({
                                      next: (data) => {
                                          this.alertService.success('Registration successful. Please check your mail. Thank you!', { keepAfterRouteChange: true });
                                          console.log(data);
                                          this.router.navigate(['/account/login'], { relativeTo: this.route });
                                      },
                                      error: error => {
                                          this.alertService.error('Registration failed', { keepAfterRouteChange: true });
                                          this.loading = false;
                                      }
                                  });
    }

}
