import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../services/doctor.service';
import {DoctorModel} from '../../models/DoctorModel';
import {DoctorDatesModel} from '../../models/DoctorDatesModel';

@Component({
  selector: 'app-patient-hours-picker',
  templateUrl: './patient-hours-picker.component.html',
  styleUrls: ['./patient-hours-picker.component.scss']
})
export class PatientHoursPickerComponent implements OnInit {
  date: string;
  tableHeaders: string[] = ['Godzina', 'Stan', 'Rezerwuj'];
  doctors: DoctorModel[];
  doctorDates: DoctorDatesModel;
  selectedDoctorId: number;
  listOfHours: Map<string, boolean>;
  keys: string[];
  values: boolean[];

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date');

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
          if (this.doctorDates.days[i].date === this.date) {
            // date from form
            this.listOfHours = this.doctorDates.days[i].listOfHours;
            this.keys = Object.keys(this.listOfHours);
            this.values = Object.values(this.listOfHours);
          }
        }
      });
    }
  }
}
