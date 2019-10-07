import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../services/doctor.service';
import {DoctorModel} from '../../models/DoctorModel';
import {DoctorDatesModel} from '../../models/DoctorDatesModel';
import {HourModel} from '../../models/HourModel';

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
  doctorHours: HourModel[];
  actualDate: Date;
  isDateOk = true;

  time = {hour: 10, minute: 30};

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) {
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
      this.doctorService.getDoctorDatesById(this.selectedDoctorId).subscribe(value => {
        this.doctorDates = value;

        for (let i = 0; i < this.doctorDates.days.length; i++) {
          if (this.doctorDates.days[i].date === this.stringDateFromPath) {
            this.doctorHours = this.doctorDates.days[i].listOfHours;
            console.log(this.doctorHours);
          }
        }
      });
    }
  }
}
