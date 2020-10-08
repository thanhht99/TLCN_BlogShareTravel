import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  createNewUser(){
    this.registerService.createUser('Testing', 'Testing', 'Testing', 'Testing', 'Testing').subscribe((response: any) =>{
      console.log(response);
    });
  }

}
