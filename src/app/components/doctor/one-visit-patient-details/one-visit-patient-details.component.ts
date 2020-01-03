import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {PatientVisitsModel} from '../../../models/PatientVisitsModel';
import {PatientModel} from '../../../models/PatientModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-one-visit-patient-details',
  templateUrl: './one-visit-patient-details.component.html',
  styleUrls: ['./one-visit-patient-details.component.scss']
})
export class OneVisitPatientDetailsComponent implements OnInit {

  patientVisitsHeaders = ['Data', 'Godzina', 'Doktor', 'Opis'];
  patientVisits: PatientVisitsModel[];
  patient: PatientModel;
  patientId: string;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('patientId');

    this.patientService.getPatientById(this.patientId).subscribe(value => {
      this.patient = value;
    });

    this.patientService.getAllPatientVisitsByPatientId(this.patientId).subscribe(value => {
      this.patientVisits = value;
    }, error1 => console.log(error1.error.message));
  }

}
