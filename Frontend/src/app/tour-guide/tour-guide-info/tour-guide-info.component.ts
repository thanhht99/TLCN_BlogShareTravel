import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService, TourGuideService } from '../../_services';
import { TourGuide,Account } from '../../models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tour-guide-info',
  templateUrl: './tour-guide-info.component.html',
  styleUrls: ['./tour-guide-info.component.scss']
})
export class TourGuideInfoComponent implements OnInit {

  tourGuide: TourGuide;
  account: Account;
  id: number;
  sub: any;

  constructor(private loginService: LoginService,
              private tourGuideService: TourGuideService, 
              private router: Router,
              private route: ActivatedRoute) 
  {
    this.account = this.loginService.accountValue;
    console.log(this.account)

    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.id = id;
      console.log(this.id)
      this.tourGuideService.infoTourGuide(this.id)
          .pipe(first())
          .subscribe(lists => {
            console.log('--------------lists-------------');
            console.log(lists);
            }
          );         
    });

    this.tourGuide = this.tourGuideService.tourGuideValue;
    console.log(this.tourGuide);
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
  }

  reloadPage(){
    window.location.reload();
  }

}
