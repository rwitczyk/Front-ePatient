import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {BookAVisitModel} from '../../../models/BookAVisitModel';
import {PatientService} from '../../../services/patient.service';
import {PatientModel} from '../../../models/PatientModel';
import {ActivatedRoute} from '@angular/router';
import {TimeModel} from '../../../models/TimeModel';
import {OneVisitModel} from '../../../models/OneVisitModel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-book-a-visit-details',
  templateUrl: './book-a-visit-details.component.html',
  styleUrls: ['./book-a-visit-details.component.scss']
})
export class BookAVisitDetailsComponent implements OnInit {
  visitId: string;
  visit: BookAVisitModel;
  patientAccount: PatientModel;
  visitFromTime: TimeModel;
  visitToTime: TimeModel;
  oneVisitModel: OneVisitModel;

  constructor(private toastr: ToastrService, private doctorService: DoctorService, private patientService: PatientService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.visitId = this.route.snapshot.paramMap.get('visitId');

    this.doctorService.getBookAVisitByVisitId(this.visitId).subscribe(value => {
        this.visit = value;

        this.visitFromTime = new TimeModel();
        this.visitToTime = new TimeModel();
        this.visitFromTime.hour = this.visit.visitHour;
        this.visitFromTime.minute = this.visit.visitMinute;
        this.visitToTime.hour = this.visit.visitHour;
        this.visitToTime.minute = this.visit.visitMinute + 5;

        this.patientService.getPatientById(this.visit.patientId.toString()).subscribe(value1 => {
          this.patientAccount = value1;
        }, error1 => {
          console.log(error1.error.message);
        });
      }, error1 => {
        console.log(error1.error.message);
      }
    );
  }

  approveVisit(value: string) {
    this.oneVisitModel = new OneVisitModel();
    this.oneVisitModel.additionalDescription = value;
    this.oneVisitModel.visitDate = this.visit.visitDate;
    this.oneVisitModel.fromTime = this.visitFromTime;
    this.oneVisitModel.toTime = this.visitToTime;
    this.oneVisitModel.doctorId = this.visit.doctorId.toString();
    this.oneVisitModel.isBusy = 'true';
    this.oneVisitModel.patientId = this.visit.patientId.toString();
    this.oneVisitModel.bookAVisitModelId = this.visit.visitId.toString();

    this.doctorService.approveBookAVisit(this.oneVisitModel).subscribe(() => {
      this.toastr.success('Zaakceptowano wizytę!');
    }, error1 => this.toastr.error(error1.error.message));
  }
}
