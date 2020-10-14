import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { TourGuideInfoComponent } from './tour-guide-info/tour-guide-info.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CustomerInfoComponent,
    TourGuideInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
