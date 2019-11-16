import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../models/PatientModel';
import {DoctorModel} from '../../models/DoctorModel';
import {DoctorService} from '../../services/doctor.service';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-panel-patient-account',
  templateUrl: './panel-account-details.component.html',
  styleUrls: ['./panel-account-details.component.scss']
})
export class PanelAccountDetailsComponent implements OnInit {
  firstName: string;
  lastName: string;
  emailAddress: string;
  profession: string;
  doctorRoomNumber: string;

  patient: PatientModel;
  doctor: DoctorModel;
  role: string;
  patientVisitsHeaders = ['Data', 'Godzina', 'Opis'];

  constructor(private doctorService: DoctorService, private patientService: PatientService) {
  }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role === 'ROLE_DOCTOR') {
      this.doctorService.getDoctorAccountById(sessionStorage.getItem('accountId')).subscribe(value => {
        this.doctor = value;
        this.firstName = this.doctor.name;
        this.lastName = this.doctor.surname;
        this.emailAddress = this.doctor.email;
        this.profession = this.doctor.profession;
        this.doctorRoomNumber = this.doctor.roomNumber;
      });
    } else {

      this.patientService.getPatientById(sessionStorage.getItem('accountId')).subscribe(value => {
        this.patient = value;
        this.firstName = this.patient.name;
        this.lastName = this.patient.surname;
        this.emailAddress = this.patient.email;
      });
    }

  }

}
