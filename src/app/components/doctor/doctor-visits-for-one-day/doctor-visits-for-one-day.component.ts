import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {ActivatedRoute} from '@angular/router';
import {DateModel} from '../../../models/DateModel';

@Component({
  selector: 'app-doctor-visits-for-one-day',
  templateUrl: './doctor-visits-for-one-day.component.html',
  styleUrls: ['./doctor-visits-for-one-day.component.scss']
})
export class DoctorVisitsForOneDayComponent implements OnInit {
  doctorDates: DoctorDatesModel;
  oneDay: DateModel;
  visitDate: string;
  tableHeaders = ['Godzina', 'Id pacjenta', 'Dodatkowy opis'];

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.visitDate = this.route.snapshot.paramMap.get('date');

    this.doctorService.getDoctorDatesById(sessionStorage.getItem('accountId')).subscribe(value => {
      this.doctorDates = value;
      console.log(this.doctorDates);
    });

    for (let i = 0; i < this.doctorDates.days.length; i++) {
      if (this.doctorDates.days[i].date === this.visitDate) {
        this.oneDay = this.doctorDates.days[i];
        console.log(this.oneDay);
      }
    }

  }

}
