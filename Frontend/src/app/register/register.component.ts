import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegisterService } from './register.service';
// import $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  micrositeName: string;

  constructor(private registerService: RegisterService) { 
    //this.micrositeName = $("#micrositeNameId").val();

  }

  ngOnInit(): void {
  }


  createNewAccount(fullname: string){
    this.registerService.createAccount(fullname, 'email', 'username', 'password').subscribe((response: any) =>{
      console.log(response);
    });
  }

}
