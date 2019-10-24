import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {PatientService} from '../../../services/patient.service';
import {PatientModel} from '../../../models/PatientModel';

@Component({
  selector: 'app-patient-management-by-admin',
  templateUrl: './patient-management-by-admin.component.html',
  styleUrls: ['./patient-management-by-admin.component.scss']
})
export class PatientManagementByAdminComponent implements OnInit {
  patients: PatientModel[];
  tableHeaders = ['Imię', 'Nazwisko', 'Pesel', 'Numer telefonu', 'Email', ''];

  constructor(private patientService: PatientService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.patientService.getAllPatients().subscribe(value => {
      this.patients = value;
    });
  }

  deleteDoctorAccount(patientId: number) {
    this.patientService.deletePatientById(patientId).subscribe(value => {
        this.toastr.success('Usunięto konto pacjenta');
        this.ngOnInit();
      }, error1 => {
        this.toastr.error(error1.error.message);
      }
    );
  }
}
