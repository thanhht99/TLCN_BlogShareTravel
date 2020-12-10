import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import {HeaderComponent} from './header/header.component';
@NgModule({
  declarations: [
    ErrorComponent,
    SuccessComponent,
    FooterComponent,
    HeaderComponent
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
    FooterComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
