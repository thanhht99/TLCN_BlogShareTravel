import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TourGuideRoutingModule } from './tour-guide-routing.module';
import { LayoutComponent } from './layout.component';
import { TourGuideInfoComponent } from './tour-guide-info/tour-guide-info.component';
import { TourGuideEditComponent } from './tour-guide-edit/tour-guide-edit.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TourGuideRoutingModule
  ],
  declarations: [
    LayoutComponent,
    TourGuideInfoComponent,
    TourGuideEditComponent
  ]
})
export class TourGuideModule { }
