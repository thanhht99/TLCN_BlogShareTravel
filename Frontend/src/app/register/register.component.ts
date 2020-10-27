import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";
import { ViewChild } from "@angular/core";
import { HttpResponse } from '@angular/common/http';

import { RegisterService } from './register.service';
import { Account } from '../models/account.model';
import { NotifyComponent } from '../notify/notify.component';
// import $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  public username: string;
  public password: String;
  public confirmpassword: String;
  public email: String;
  public fullname: String;
  public typeUser: String;
  //public toast: ToastComponent

  private readonly notifier: NotifierService;
  @ViewChild("customNotification", { static: true }) customNotificationTmpl;
  
  constructor(private registerService: RegisterService, 
              private router: Router,
              public notify: NotifyComponent,
              notifierService: NotifierService) 
  { 
    
    this.notifier = notifierService;

  }

  ngOnInit(): void {
  }

  showNotification() {
    this.notifier.show({
        message: "Hi there!",
        type: "info",
        template: this.customNotificationTmpl
    });
  } 
  
  createNewAccount(){
    let account = new Account();
        account.fullname = this.fullname;
        account.email = this.email;
        account.username = this.username;
        account.password = this.password;
        account.confirmpassword = this.confirmpassword;       

    if(this.typeUser == 'customer')
    { 
        account.isCustomer = true;
        account.isTourGuide = false;
    }
    if(this.typeUser == 'tourGuide')
    { 
        account.isCustomer = false;
        account.isTourGuide = true;
    }

    //console.log(account);

    this.registerService.createAccount(account).subscribe(
      (res) =>{
        // if (res.status === 200) {
        //   // we have logged in successfully
        //     console.log('Hello200');
        //     this.router.navigate(['home']);
        // }
        // if (res.status === 403) {
        //   // we have logged in successfully
        //   console.log('Hello403');
        //   //this.router.navigate(['/home']);
        // }
        console.log(res);
        console.log('Hello');
        //this.notify.setMessage('Successfully registered!', 'success');
        //this.notifier.notify("success", "Successfully registered!");

        
      

        //this.router.navigate(['/']);
      },
      error => console.log(error)
    );

    
    
  }

}
