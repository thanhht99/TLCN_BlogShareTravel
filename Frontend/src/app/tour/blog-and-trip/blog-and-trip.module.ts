import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BlogAndTripRoutingModule } from './blog-and-trip-routing.module';
import { LayoutComponent } from './layout.component';

import { TripComponent } from './trip/trip.component';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

import { RegisterTripComponent } from './register-trip/register-trip.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TripComponent,
    RegisterTripComponent,
    BlogComponent,
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogAndTripRoutingModule
  ],
  exports: [
    LayoutComponent,

    //blog
    BlogComponent
  ]
  
})
export class BlogAndTripModule { }
