import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterAccountComponent} from './components/register-account/register-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {PatientDatePickerComponent} from './components/patient-date-picker/patient-date-picker.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterAccountComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'patient-date-picker', component: PatientDatePickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
