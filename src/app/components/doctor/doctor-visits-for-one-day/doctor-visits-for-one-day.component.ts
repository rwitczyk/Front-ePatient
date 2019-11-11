import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {ActivatedRoute} from '@angular/router';
import {DateModel} from '../../../models/DateModel';
import {BookAVisitModel} from '../../../models/BookAVisitModel';
import {OneVisitModel} from '../../../models/OneVisitModel';

@Component({
  selector: 'app-doctor-visits-for-one-day',
  templateUrl: './doctor-visits-for-one-day.component.html',
  styleUrls: ['./doctor-visits-for-one-day.component.scss']
})
export class DoctorVisitsForOneDayComponent implements OnInit {
  doctorDates: DoctorDatesModel;
  oneDay: DateModel;
  visitsToAccept: BookAVisitModel[];
  visitDate: string;
  tableHeaders = ['Godzina', 'Dodatkowy opis'];
  visitTableHeaders = ['Godzina', 'Opis'];
  doctorVisits: OneVisitModel[];

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.visitDate = this.route.snapshot.paramMap.get('date');

    this.doctorService.getDoctorDatesById(sessionStorage.getItem('accountId')).subscribe(value => {
      this.doctorDates = value;
      // console.log(this.doctorDates);

      for (let i = 0; i < this.doctorDates.days.length; i++) {
        if (this.doctorDates.days[i].date === this.visitDate) {
          this.oneDay = this.doctorDates.days[i];
          console.log(this.oneDay);
          this.doctorVisits = this.oneDay.listOfOneVisitEntities;
          console.log(this.doctorVisits);
          this.visitsToAccept = this.oneDay.listOfVisitsToApprove;
        }
      }
    });


  }

}
