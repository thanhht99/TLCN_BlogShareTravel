import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LayoutComponent } from './layout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule
  ],
  declarations: [
    LayoutComponent,
    CustomerInfoComponent
  ]
})
export class CustomerModule { }
