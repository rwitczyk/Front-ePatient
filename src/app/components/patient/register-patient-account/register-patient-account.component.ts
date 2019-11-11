import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PatientModel} from '../../../models/PatientModel';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-patient-account.component.html',
  styleUrls: ['./register-patient-account.component.scss']
})
export class RegisterPatientAccountComponent implements OnInit {
  patientForm: FormGroup;
  patientModel: PatientModel;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientForm = this.fb.group({
      patientEmailForm: [null, [Validators.required, Validators.email]],
      patientFirstNameForm: [null, Validators.required],
      patientLastNameForm: [null, Validators.required],
      patientPasswordForm: [null, Validators.required],
      patientPeselForm: [null, [Validators.pattern('[0-9]{11}'), Validators.required]],
      patientDateOfBirthForm: [null, [Validators.pattern('[0-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]'), Validators.required]],
      patientPhoneNumberForm: [null, [Validators.pattern('[0-9]{9}'), Validators.required]]
    });
  }

  registerPatient() {
    if (this.patientForm.valid) {
      this.patientModel = new PatientModel();
      this.patientModel.email = this.patientForm.controls.patientEmailForm.value;
      this.patientModel.password = this.patientForm.controls.patientPasswordForm.value;
      this.patientModel.name = this.patientForm.controls.patientFirstNameForm.value;
      this.patientModel.surname = this.patientForm.controls.patientLastNameForm.value;
      this.patientModel.dateOfBirth = this.patientForm.controls.patientDateOfBirthForm.value;
      this.patientModel.pesel = this.patientForm.controls.patientPeselForm.value;
      this.patientModel.phoneNumber = this.patientForm.controls.patientPhoneNumberForm.value;

      this.patientService.addPatientAccount(this.patientModel).subscribe(() => {
        this.toastr.success('Pomyślnie utworzono konto pacjenta');
      }, error => this.toastr.error(error.error.message));

    } else {
      this.toastr.error('Sprawdź dane w formularzu');
    }
  }
}
