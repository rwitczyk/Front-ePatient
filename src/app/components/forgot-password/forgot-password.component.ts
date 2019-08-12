import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private accountService: AccountService) {
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      userEmail: [null, [Validators.email, Validators.required]]
    });
  }

  sendEmail() {
    if (this.emailForm.get('userEmail').hasError('email') || this.emailForm.get('userEmail').hasError('required')) {
      this.toastr.error('Podaj poprawny email');
    } else {
      this.accountService.sendEmail(this.emailForm.get('userEmail').value).subscribe(value => {
        this.toastr.success('Wysłano powiadomienie na podany adres email');
      }, error1 => this.toastr.error('Błąd wysyłania email'));
    }
  }
}
