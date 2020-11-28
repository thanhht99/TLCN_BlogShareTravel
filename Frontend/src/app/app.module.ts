import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './account/register.component';
import { LoginComponent } from './account/login.component';
import { HomeComponent } from './home/home.component';

import { ErrorComponent } from './_components';

import { AlertComponent } from './_components';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog/blog.component';

@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    BlogComponent
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
