import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { LayoutComponent } from './layout.component';

import { ListToursComponent } from './list-tours/list-tours.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddImageComponent } from './add-image/add-image.component';

import { ErrorComponent } from '../_components';
import { JwPaginationModule } from 'jw-angular-pagination';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    LayoutComponent,
    ListToursComponent,
    AddTourComponent,
    AddImageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TourRoutingModule,
    JwPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    LayoutComponent,
  ]
  
})
export class TourModule { }
