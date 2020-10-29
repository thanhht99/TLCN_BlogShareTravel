import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterService } from './register.service';
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

      // if(this.typeUser == 'customer')
      // { 
      //     account.isCustomer = true;
      //     account.isTourGuide = false;
      // }
      // if(this.typeUser == 'tourGuide')
      // { 
      //     account.isCustomer = false;
      //     account.isTourGuide = true;
      // }

      //console.log(account);

      // this.registerService.createAccount(account).subscribe(
      //   (res) =>{
      //     // if (res.status === 200) {
      //     //   // we have logged in successfully
      //     //     console.log('Hello200');
      //     //     this.router.navigate(['home']);
      //     // }
      //     // if (res.status === 403) {
      //     //   // we have logged in successfully
      //     //   console.log('Hello403');
      //     //   //this.router.navigate(['/home']);
      //     // }    
        

      //     this.router.navigate(['/login']);
      //   },
      //   error => console.log(error)
      // );

        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
          return;
        }
        this.loading = true;
        this.registerService.createAccount(this.form.value)
                            .pipe(first())
                                  .subscribe({
                                      next: (data) => {
                                          this.alertService.success('Registration successful. Please check your mail. Thank you!', { keepAfterRouteChange: true });
                                          console.log(data);
                                          this.router.navigate(['/login'], { relativeTo: this.route });
                                      },
                                      error: error => {
                                          this.alertService.error(error);
                                          this.loading = false;
                                      }
                                  });
    }

}
