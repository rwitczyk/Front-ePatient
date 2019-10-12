import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {DoctorModel} from '../../../models/DoctorModel';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-doctor-account.component.html',
  styleUrls: ['./register-doctor-account.component.scss']
})
export class RegisterDoctorAccountComponent implements OnInit {
  doctorForm: FormGroup;
  doctorModel: DoctorModel;

  constructor(private fb: FormBuilder, private toastr: ToastrService,
              private doctorService: DoctorService) {
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
  }

  registerDoctor() {
    if (this.doctorForm.valid) {
      this.doctorModel = new DoctorModel();
      this.doctorModel.email = this.doctorForm.controls.doctorEmailForm.value;
      this.doctorModel.name = this.doctorForm.controls.doctorFirstNameForm.value;
      this.doctorModel.surname = this.doctorForm.controls.doctorLastNameForm.value;
      this.doctorModel.password = this.doctorForm.controls.doctorPasswordForm.value;
      this.doctorModel.profession = this.doctorForm.controls.doctorProfessionForm.value;
      this.doctorModel.roomNumber = this.doctorForm.controls.doctorRoomNumberForm.value;
      this.doctorModel.phoneNumber = this.doctorForm.controls.doctorPhoneNumberForm.value;

      this.doctorService.addDoctorAccount(this.doctorModel).subscribe(() => {
        this.toastr.success('Pomyślnie utworzono konto doktora!');
      }, () => {
        this.toastr.error('Błąd dodawania konta doktora');
      });
    } else {
      this.toastr.error('Sprawdź dane w formularzu');
    }
  }

}
