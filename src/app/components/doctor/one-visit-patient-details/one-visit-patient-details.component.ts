import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {PatientVisitsModel} from '../../../models/PatientVisitsModel';
import {PatientModel} from '../../../models/PatientModel';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../../services/doctor.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-one-visit-patient-details',
  templateUrl: './one-visit-patient-details.component.html',
  styleUrls: ['./one-visit-patient-details.component.scss']
})
export class OneVisitPatientDetailsComponent implements OnInit {

  patientVisitsHeaders = ['Data', 'Godzina', 'Doktor', 'Opis', 'Opis doktora'];
  patientVisits: PatientVisitsModel[];
  patient: PatientModel;
  patientId: string;
  visitId: string;
  oneVisitDoctorDescription: string;

  constructor(private patientService: PatientService, private doctorService: DoctorService,
              private route: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.visitId = this.route.snapshot.paramMap.get('visitId');

    this.doctorService.getOneVisitByVisitId(this.visitId).subscribe(value => {
      this.oneVisitDoctorDescription = value;
    });

    this.patientService.getPatientById(this.patientId).subscribe(value => {
      this.patient = value;
    });

    this.patientService.getAllPatientVisitsByPatientId(this.patientId).subscribe(value => {
      this.patientVisits = value;
    }, error1 => console.log(error1.error.message));
  }

  changeOneVisitDoctorDescription(doctorDescription: string) {
    this.doctorService.changeOneVisitDoctorDescription(doctorDescription, this.visitId).subscribe(() => {
        this.toastr.success('Zmieniono opis wizyty!');
      }
    );
  }
}
