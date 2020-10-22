import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegisterService } from './register.service';
import { Account } from '../models/account.model';
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
  
  
  constructor(private registerService: RegisterService) { 
    //this.micrositeName = $("#micrositeNameId").val();

  }

  ngOnInit(): void {
  }

  

  createNewAccount(){
    let account = new Account();
        account.fullname = this.fullname;
        account.email = this.email;
        account.username = this.username;
        account.password = this.password;
        account.confirmpassword = this.confirmpassword;
        account.typeUser = this.typeUser;

    if(account.typeUser == 'customer')
    { 
        account.isCustomer = true;
        account.isTourGuide = false;
    }
    if(account.typeUser == 'tourGuide')
    { 
        account.isCustomer = false;
        account.isTourGuide = true;
    }

    //console.log(account);

    try {
        this.registerService.createAccount(account.fullname,account.email,account.username,account.password,account.confirmpassword,account.isTourGuide,account.isCustomer).subscribe((response: any) =>{
          console.log(response);
        });
    }catch (error){
        console.log(error);
        //return this.router.navigateByUrl('/register');
    }
    
  }

}
