import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tour, Account, TourGuide } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService, TourService, AlertService } from '../../_services';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import * as _ from 'lodash';
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
  id: number;
  account: Account;
  constructor(private loginService: LoginService,
              private tourService: TourService,
              private alertService: AlertService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private http: HttpClient
              ) 
  {
    this.loginService.account.subscribe(x => this.account = x);
    this.tourService.imageForTour.subscribe(a => this.tour = a);
    this.id = this.route.snapshot.params['id'];
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

  addImage(){

    if (!this.form.get('avatarPath').value) {
      alert('Please select an image!');
      return false;
    }

    const formData = new FormData();
    formData.append('avatarPath', this.form.get('avatarPath').value);
    formData.append('agentId', '007');

      console.log("-------------addImage-------------")
      console.log(formData)
      // this.tourService.addImage(formData)
      //                 .pipe(first())
      //                 .subscribe({
      //                     next: (tour: any) => {
      //                       console.log("-------------addImage v-------------")
      //                       this.alertService.success('Update image successfully!', { keepAfterRouteChange: true }); 
      //                       this.router.navigate(['/tour/add/list'], { relativeTo: this.route });
      //                     },
      //                     error: er => {
      //                       console.log(er);
      //                       alert(er.error.error);
      //                       // this.alertService.error('Add Tour Failed', { keepAfterRouteChange: true });
      //                       this.loading = false;
      //                     }
      //                 }); 



      this.tourService.addImage(formData, this.id)
                      .subscribe({
                        next: () => {
                          this.alertService.success('Tạo tour thành công. (Nhấn nút cập nhật để xem tour mới tạo)', { keepAfterRouteChange: true });                                                                                                                                                         
                          this.router.navigate([`/tourguide/info/${this.account.id}/listTour`], { relativeTo: this.route });
                        },
                        error: er => {
                          alert(er.error.error);
                          this.loading = false;
                        }
                      });  
  }
}
