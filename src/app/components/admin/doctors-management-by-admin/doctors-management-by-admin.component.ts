import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {DoctorModel} from '../../../models/DoctorModel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-doctors-management-by-admin',
  templateUrl: './doctors-management-by-admin.component.html',
  styleUrls: ['./doctors-management-by-admin.component.scss']
})
export class DoctorsManagementByAdminComponent implements OnInit {
  doctors: DoctorModel[];
  tableHeaders = ['Imię', 'Nazwisko', 'Specjalizacja', 'Numer pokoju', 'Email', ''];

  constructor(private doctorService: DoctorService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.doctorService.getAllDoctors().subscribe(value => {
      this.doctors = value;
    });
  }

  deleteDoctorAccount(doctorId: number) {
    this.doctorService.deleteDoctorAccount(doctorId).subscribe(value => {
      this.toastr.success('Usunięto konto doktora');
      this.ngOnInit();
      }, error1 => {
      this.toastr.error(error1.error.message);
      }
    );
  }
}
