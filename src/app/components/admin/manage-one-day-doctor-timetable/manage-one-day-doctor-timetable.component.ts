import {Component, OnInit} from '@angular/core';
import {DoctorTimetableModel} from '../../../models/DoctorTimetableModel';

@Component({
  selector: 'app-manage-one-day-doctor-timetable',
  templateUrl: './manage-one-day-doctor-timetable.component.html',
  styleUrls: ['./manage-one-day-doctor-timetable.component.scss']
})
export class ManageOneDayDoctorTimetableComponent implements OnInit {

  doctorTimetable: DoctorTimetableModel;

  visitLength = {hour: 0, minute: 30};
  visitsFromTime = {hour: 8, minute: 0};
  visitsToTime = {hour: 16, minute: 0};
  oneVisitFromTime = {hour: 12, minute: 0};
  oneVisitToTime = {hour: 12, minute: 30};

  constructor() {
  }

  ngOnInit() {
  }

  createAutoTimetable() {
    this.doctorTimetable.doctorId = 1;
    this.doctorTimetable.fromTime = this.visitsFromTime;
    this.doctorTimetable.toTime = this.visitsToTime;
    this.doctorTimetable.minutes = this.visitLength;
  }
}
