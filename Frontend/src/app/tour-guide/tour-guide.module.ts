import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TourGuideRoutingModule } from './tour-guide-routing.module';
import { LayoutComponent } from './layout.component';
import { TourGuideInfoComponent } from './tour-guide-info.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TourGuideRoutingModule
  ],
  declarations: [
    LayoutComponent,
    TourGuideInfoComponent
  ]
})
export class TourGuideModule { }
