import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterPatientAccountComponent} from './components/patient/register-patient-account/register-patient-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {PatientDatePickerComponent} from './components/patient/patient-date-picker/patient-date-picker.component';
import {PatientHoursPickerComponent} from './components/patient/patient-hours-picker/patient-hours-picker.component';
import {RegisterDoctorAccountComponent} from './components/admin/register-doctor-account/register-doctor-account.component';
import {DoctorVisitsDatePickerComponent} from './components/doctor/doctor-visits-date-picker/doctor-visits-date-picker.component';
import {DoctorsManagementByAdminComponent} from './components/admin/doctors-management-by-admin/doctors-management-by-admin.component';
import {DoctorVisitsForOneDayComponent} from './components/doctor/doctor-visits-for-one-day/doctor-visits-for-one-day.component';
import {PanelAccountDetailsComponent} from './components/panel-account-details/panel-account-details.component';
import {PatientManagementByAdminComponent} from './components/admin/patient-management-by-admin/patient-management-by-admin.component';
import {ManageTimetableDoctorComponent} from './components/admin/manage-timetable-doctor/manage-timetable-doctor.component';
import {ManageOneDayDoctorTimetableComponent} from './components/admin/manage-one-day-doctor-timetable/manage-one-day-doctor-timetable.component';
import {BookAVisitDetailsComponent} from './components/doctor/book-a-visit-details/book-a-visit-details.component';
import {OneVisitPatientDetailsComponent} from './components/doctor/one-visit-patient-details/one-visit-patient-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register-patient', component: RegisterPatientAccountComponent},
  {path: 'register-doctor', component: RegisterDoctorAccountComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'patient-date-picker', component: PatientDatePickerComponent},
  {path: 'patient-hours-picker/:date', component: PatientHoursPickerComponent},
  {path: 'doctor-visits-date-picker', component: DoctorVisitsDatePickerComponent},
  {path: 'doctors-management', component: DoctorsManagementByAdminComponent},
  {path: 'manage-doctor-timetable/:id', component: ManageTimetableDoctorComponent},
  {path: 'manage-one-day-doctor-timetable/:date/:id', component: ManageOneDayDoctorTimetableComponent},
  {path: 'doctor-visits-for-one-day/:date', component: DoctorVisitsForOneDayComponent},
  {path: 'account-details', component: PanelAccountDetailsComponent},
  {path: 'patients-management', component: PatientManagementByAdminComponent},
  {path: 'book-a-visit-details/:visitId', component: BookAVisitDetailsComponent},
  {path: 'one-visit-patient-details/:patientId', component: OneVisitPatientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
