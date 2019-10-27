import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../../services/doctor.service';
import {DoctorModel} from '../../../models/DoctorModel';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {OneVisitModel} from '../../../models/OneVisitModel';
import {BookAVisitModel} from '../../../models/BookAVisitModel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-patient-hours-picker',
  templateUrl: './patient-hours-picker.component.html',
  styleUrls: ['./patient-hours-picker.component.scss']
})
export class PatientHoursPickerComponent implements OnInit {
  dateFromPath: Date;
  stringDateFromPath: string;
  tableHeaders: string[] = ['Godzina', 'Stan', 'Rezerwuj'];
  doctors: DoctorModel[];
  doctorDates: DoctorDatesModel;
  selectedDoctorId: number;
  doctorHours: OneVisitModel[];
  actualDate: Date;
  bookAVisitModel: BookAVisitModel;
  isDateOk = true;

  time = {hour: 10, minute: 30};

  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.stringDateFromPath = this.route.snapshot.paramMap.get('date');
    this.dateFromPath = new Date(this.stringDateFromPath);
    this.actualDate = new Date();

    if (this.dateFromPath <= this.actualDate) {
      this.isDateOk = false;
    }

    this.doctorService.getAllDoctors().subscribe(value => {
      this.doctors = value;
    });
  }

  selectOption() {
    console.log('Doctor ID: ' + this.selectedDoctorId);
    if (this.selectedDoctorId.toString().length > 0) {
      this.doctorService.getDoctorDatesById(this.selectedDoctorId.toString()).subscribe(value => {
        this.doctorDates = value;

        for (let i = 0; i < this.doctorDates.days.length; i++) {
          if (this.doctorDates.days[i].date === this.stringDateFromPath) {
            this.doctorHours = this.doctorDates.days[i].listOfOneVisit;
            console.log(this.doctorHours);
          }
        }
      });
    }
  }

  sendQuestionAboutReservation(visitDescription: string) {
    this.bookAVisitModel = new BookAVisitModel();
    this.bookAVisitModel.additionalVisitDescription = visitDescription;
    this.bookAVisitModel.doctorId = this.selectedDoctorId;
    this.bookAVisitModel.patientId = 2;
    this.bookAVisitModel.visitHour = this.time.hour;
    this.bookAVisitModel.visitMinute = this.time.minute;
    this.bookAVisitModel.visitDate = this.stringDateFromPath;

    this.doctorService.sendQuestionAboutReservationVisit(this.bookAVisitModel).subscribe(() => {
      this.toastrService.success('Wysłano prośbę');
    }, error => this.toastrService.error(error.error.message));
  }
}
