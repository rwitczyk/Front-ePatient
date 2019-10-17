import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginModel} from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  sendEmail(email: string) {
    return this.http.post(`${environment.backendUrl}/api/account/email`, email);
  }

  login(loginModel: LoginModel) {
    return this.http.post(`${environment.backendUrl}/api/login`, loginModel);
  }
}
