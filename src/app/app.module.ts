import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
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
import {RegisterPatientAccountComponent} from './components/patient/register-patient-account/register-patient-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PatientDatePickerComponent} from './components/patient/patient-date-picker/patient-date-picker.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {PatientHoursPickerComponent} from './components/patient/patient-hours-picker/patient-hours-picker.component';
import {RegisterDoctorAccountComponent} from './components/admin/register-doctor-account/register-doctor-account.component';
import {DoctorVisitsDatePickerComponent} from './components/doctor/doctor-visits-date-picker/doctor-visits-date-picker.component';
import {NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {DoctorsManagementByAdminComponent} from './components/admin/doctors-management-by-admin/doctors-management-by-admin.component';
import {DoctorVisitsForOneDayComponent} from './components/doctor/doctor-visits-for-one-day/doctor-visits-for-one-day.component';
import {PanelAccountDetailsComponent} from './components/patient/panel-account-details/panel-account-details.component';
import {HttpHeadersInterceptor} from './http-headers-interceptor';
import {ManageTimetableDoctorComponent} from './components/admin/manage-timetable-doctor/manage-timetable-doctor.component';
import {PatientManagementByAdminComponent} from './components/admin/patient-management-by-admin/patient-management-by-admin.component';
import {ManageOneDayDoctorTimetableComponent} from './components/admin/manage-one-day-doctor-timetable/manage-one-day-doctor-timetable.component';

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
    DoctorsManagementByAdminComponent,
    DoctorVisitsForOneDayComponent,
    PanelAccountDetailsComponent,
    ManageTimetableDoctorComponent,
    PatientManagementByAdminComponent,
    ManageOneDayDoctorTimetableComponent,
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
    FormsModule, ReactiveFormsModule, NgbTimepickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
