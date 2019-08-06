import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PatientModel} from '../../models/PatientModel';
import {DoctorModel} from '../../models/DoctorModel';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {
  doctorForm: FormGroup;
  patientForm: FormGroup;
  patientModel: PatientModel;
  doctorModel: DoctorModel;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private patientService: PatientService) {
  }

  ngOnInit() {
    this.doctorForm = this.fb.group({
      doctorEmailForm: [null, [Validators.required, Validators.email]],
      doctorFirstNameForm: [null, Validators.required],
      doctorLastNameForm: [null, Validators.required],
      doctorPasswordForm: [null, Validators.required],
      doctorProfessionForm: [null, Validators.required],
      doctorRoomNumberForm: [null],
      doctorPhoneNumberForm: [null, [Validators.pattern('[0-9]{9}'), Validators.required]]
    });

    this.patientForm = this.fb.group({
      patientEmailForm: [null, [Validators.required, Validators.email]],
      patientFirstNameForm: [null, Validators.required],
      patientLastNameForm: [null, Validators.required],
      patientPasswordForm: [null, Validators.required],
      patientPeselForm: [null, [Validators.pattern('[0-9]{11}'), Validators.required]],
      patientDateOfBirthForm: [null, Validators.required],
      patientPhoneNumberForm: [null, [Validators.pattern('[0-9]{9}'), Validators.required]]
    });
  }

  registerDoctor() {
    if (this.doctorForm.invalid) {

      this.toastr.success('Utworzono nowe konto!');
    } else {
      this.toastr.error('Sprawdź dane w formularzu');
    }
  }

  registerPatient() {
    this.patientModel = new PatientModel();
    this.patientModel.email = this.patientForm.controls.patientEmailForm.value;
    this.patientModel.password = this.patientForm.controls.patientPasswordForm.value;
    this.patientModel.name = this.patientForm.controls.patientFirstNameForm.value;
    this.patientModel.surname = this.patientForm.controls.patientLastNameForm.value;
    this.patientModel.dateOfBirth = this.patientForm.controls.patientDateOfBirthForm.value;
    this.patientModel.pesel = this.patientForm.controls.patientPeselForm.value;
    this.patientModel.phoneNumber = this.patientForm.controls.patientPhoneNumberForm.value;

    this.patientService.addPatientAccount(this.patientModel).subscribe(value => {
      this.toastr.success('Pomyślnie utworzono konto');
    }, error => this.toastr.error('Błąd dodawania pacjenta'));

    console.log(this.patientForm.controls.patientFirstNameForm.value);
  }
}
