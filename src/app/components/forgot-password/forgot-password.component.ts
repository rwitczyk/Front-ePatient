import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
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
      // TODO
      this.toastr.success('Wysłano powiadomienie na podany adres email');
    }
  }
}
