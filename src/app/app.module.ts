import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbarUser/navbar.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonsModule, InputsModule, InputUtilitiesModule, MDBBootstrapModule, TableModule, WavesModule} from 'angular-bootstrap-md';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterAccountComponent} from './components/register-account/register-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogInComponent,
    RegisterAccountComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    TableModule,
    MatTabsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
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
export class AppModule { }
