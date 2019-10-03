import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbarUser/navbar.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
  ButtonsModule,
  InputsModule,
  InputUtilitiesModule,
  MDBBootstrapModule,
  NavbarModule,
  TableModule,
  WavesModule
} from 'angular-bootstrap-md';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterPatientAccountComponent} from './components/register-patient-account/register-patient-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PatientDatePickerComponent} from './components/patient-date-picker/patient-date-picker.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {PatientHoursPickerComponent} from './components/patient-hours-picker/patient-hours-picker.component';
import {RegisterDoctorAccountComponent} from './components/register-doctor-account/register-doctor-account.component';
import {DoctorVisitsDatePickerComponent} from './components/doctor-visits-date-picker/doctor-visits-date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogInComponent,
    RegisterPatientAccountComponent,
    RegisterDoctorAccountComponent,
    ForgotPasswordComponent,
    PatientDatePickerComponent,
    PatientHoursPickerComponent,
    DoctorVisitsDatePickerComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    TableModule,
    MatTabsModule,
    InputUtilitiesModule,
    WavesModule,
    HttpClientModule,
    FullCalendarModule,
    ButtonsModule,
    NavbarModule,
    InputsModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      extendedTimeOut: 2000,
      easeTime: 500,
      resetTimeoutOnDuplicate: true
    }),
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
