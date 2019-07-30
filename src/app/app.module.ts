import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbarUser/navbar.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MDBBootstrapModule, TableModule} from 'angular-bootstrap-md';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterAccountComponent} from './components/register-account/register-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogInComponent,
    RegisterAccountComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
