import {Component, OnInit} from '@angular/core';
import {DoctorTimetableModel} from '../../../models/DoctorTimetableModel';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../../services/doctor.service';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {DateModel} from '../../../models/DateModel';
import {OneVisitModel} from '../../../models/OneVisitModel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-manage-one-day-doctor-timetable',
  templateUrl: './manage-one-day-doctor-timetable.component.html',
  styleUrls: ['./manage-one-day-doctor-timetable.component.scss']
})
export class ManageOneDayDoctorTimetableComponent implements OnInit {

  doctorTimetable: DoctorTimetableModel;
  oneVisitModel: OneVisitModel;

  doctorDates: DoctorDatesModel;
  oneDay: DateModel;
  doctorVisits: OneVisitModel[];

  visitLength = {hour: 0, minute: 30};
  visitsFromTime = {hour: 8, minute: 0};
  visitsToTime = {hour: 16, minute: 0};
  oneVisitFromTime = {hour: 12, minute: 0};
  oneVisitToTime = {hour: 12, minute: 30};

  visitDate: string;
  doctorId: string;
  visitTableHeaders = ['Od godziny', 'Do godziny', 'Stan', 'Opis'];

  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.visitDate = this.route.snapshot.paramMap.get('date');
    this.doctorId = this.route.snapshot.paramMap.get('id');

    this.doctorService.getDoctorDatesById(this.doctorId).subscribe(value => {
      this.doctorDates = value;
      console.log(this.doctorDates);

      for (let i = 0; i < this.doctorDates.days.length; i++) {
        if (this.doctorDates.days[i].date === this.visitDate) {
          this.oneDay = this.doctorDates.days[i];
          this.doctorVisits = this.oneDay.listOfOneVisitEntities;
        }
      }
    });

  }

  createAutoTimetable() {
    this.doctorTimetable = new DoctorTimetableModel();
    this.doctorTimetable.doctorId = parseInt(this.doctorId, 10);
    this.doctorTimetable.timetableDate = this.visitDate;
    this.doctorTimetable.fromTime = this.visitsFromTime;
    this.doctorTimetable.toTime = this.visitsToTime;
    this.doctorTimetable.minutes = this.visitLength;

    this.doctorService.createEmptyDoctorTimetableForOneDay(this.doctorTimetable).subscribe(() => {
      this.toastr.success('Stworzono automatyczny harmongram!');
      this.ngOnInit();
    }, error1 => console.log(error1.error.message));
  }

  createOneVisit() {
    this.oneVisitModel = new OneVisitModel();
    this.oneVisitModel.doctorId = this.doctorId;
    this.oneVisitModel.fromTime = this.oneVisitFromTime;
    this.oneVisitModel.toTime = this.oneVisitToTime;
    this.oneVisitModel.visitDate = this.visitDate;

    this.doctorService.createEmptyOneVisit(this.oneVisitModel).subscribe(() => {
      this.toastr.success('Stworzono pojedynczą wizytę!');
      this.ngOnInit();
    }, error1 => console.log(error1.error.message));
  }
}
