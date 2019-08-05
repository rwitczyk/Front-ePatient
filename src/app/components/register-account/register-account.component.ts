import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.doctorForm = this.fb.group({
      doctorEmailForm: [null, [Validators.required, Validators.email]],
      doctorFirstNameForm: [null, Validators.required],
      doctorLastNameForm: [null, Validators.required],
      doctorPasswordForm: [null, Validators.required],
      doctorProfessionForm: [null],
      doctorRoomNumberForm: [null],
      doctorPhoneForm: [null, Validators.required]
    });
  }

  registerDoctor() {
    console.log(this.doctorForm.controls.doctorFirstNameForm.value);
  }

  registerPatient() {

  }

  get input() { return this.doctorForm.get('doctorLastNameForm'); }

}
