import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  sendEmail(email: string) {
    return this.http.post(`${environment.backendUrl}/api/account/email`, email);
  }
}
