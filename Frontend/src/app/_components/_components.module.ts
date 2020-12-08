import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    ErrorComponent,
    SuccessComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //error
    ErrorComponent,
    SuccessComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
