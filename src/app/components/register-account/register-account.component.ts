import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {
  doctorForm: FormGroup;
  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.doctorForm = this.fb.group({
      doctorEmailForm: [null, [Validators.required, Validators.email]],
      doctorFirstNameForm: [null, Validators.required],
      doctorLastNameForm: [null, Validators.required],
      doctorPasswordForm: [null, Validators.required],
      doctorProfessionForm: [null, Validators.required],
      doctorRoomNumberForm: [null],
      doctorPhoneNumberForm: [null, Validators.pattern('[0-9]{9}')]
    });

    this.patientForm = this.fb.group({
      patientEmailForm: [null, [Validators.required, Validators.email]],
      patientFirstNameForm: [null, Validators.required],
      patientLastNameForm: [null, Validators.required],
      patientPasswordForm: [null, Validators.required],
      patientPhoneNumberForm: [null, Validators.pattern('[0-9]{9}')]
    });
  }

  registerDoctor() {
    if (this.doctorForm.hasError('required')) {
      console.log(this.doctorForm.controls.doctorFirstNameForm.value);
      this.toastr.success('Utworzono nowe konto!');
    } else {
      this.toastr.error('Sprawdź dane w formularzu');
    }
  }

  registerPatient() {
    console.log(this.patientForm.controls.patientFirstNameForm.value);
  }
}
