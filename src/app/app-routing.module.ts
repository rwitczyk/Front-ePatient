import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterPatientAccountComponent} from './components/register-patient-account/register-patient-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {PatientDatePickerComponent} from './components/patient-date-picker/patient-date-picker.component';
import {PatientHoursPickerComponent} from './components/patient-hours-picker/patient-hours-picker.component';
import {RegisterDoctorAccountComponent} from './components/register-doctor-account/register-doctor-account.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register-patient', component: RegisterPatientAccountComponent},
  {path: 'register-doctor', component: RegisterDoctorAccountComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'patient-date-picker', component: PatientDatePickerComponent},
  {path: 'patient-hours-picker/:date', component: PatientHoursPickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
