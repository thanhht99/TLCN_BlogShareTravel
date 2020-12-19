import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { JwPaginationModule } from 'jw-angular-pagination';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { AlertComponent, FooterComponent, HeaderComponent } from './_components';
import { CommonModule } from '@angular/common';
import { ListRegisterTripComponent } from './list-register-trip/list-register-trip.component';
import { DetailRegisterTripComponent } from './detail-register-trip/detail-register-trip.component';
import { ListTourComponent } from './list-tour/list-tour.component';
import { DetailTourComponent } from './detail-tour/detail-tour.component';

@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwPaginationModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ListRegisterTripComponent,
    DetailRegisterTripComponent,
    ListTourComponent,
    DetailTourComponent,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
