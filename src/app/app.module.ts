import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';
import { RecordBtnComponent } from './record-btn/record-btn.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { SearchBloodComponent } from './search-blood/search-blood.component';
import { UpdareDonorComponent } from './updare-donor/updare-donor.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AllDonorRecordComponent } from './all-donor-record/all-donor-record.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    RegisterComponent,
    RecordBtnComponent,
    AddRecordComponent,
    SearchBloodComponent,
    UpdareDonorComponent,
    ViewDetailsComponent,
    AllDonorRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
