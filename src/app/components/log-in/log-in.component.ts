import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../models/LoginModel';
import {AccountService} from '../../services/account.service';
import {ToastrService} from 'ngx-toastr';
import {SessionModel} from '../../models/SessionModel';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginModel: LoginModel;
  sessionModel: SessionModel;

  constructor(private accountService: AccountService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  logInUser(email: string, password: string) {
    this.loginModel = new LoginModel();
    this.loginModel.email = email;
    this.loginModel.password = password;

    this.accountService.login(this.loginModel).subscribe(value => {
      this.sessionModel = value as SessionModel;
      sessionStorage.setItem('accountId', this.sessionModel.accountId);
      sessionStorage.setItem('role', this.sessionModel.role);
      sessionStorage.setItem('jwtToken', this.sessionModel.jwtToken);
    }, () => this.toastr.error('Niepoprawny login lub hasło'));
  }
}
