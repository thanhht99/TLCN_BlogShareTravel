import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tour, Account, TourGuide } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../_services';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileInputLabel: string;
  form: FormGroup;
  tour: Tour;
  loading = false;
  submitted = false;
  
  account: Account;
  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              ) 
  {
    this.loginService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      avatarPath: ['']
    });
  }

  onFileSelect(event) {
    const file = event.target.files[0];
    this.fileInputLabel = file.name;
    this.form.get('avatarPath').setValue(file);
  }
  get f() { return this.form.controls; }

  addImage(){

  }

  
}
