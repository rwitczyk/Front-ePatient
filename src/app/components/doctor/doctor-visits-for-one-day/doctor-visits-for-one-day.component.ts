import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {ActivatedRoute} from '@angular/router';
import {DateModel} from '../../../models/DateModel';
import {BookAVisitModel} from '../../../models/BookAVisitModel';
import {OneVisitModel} from '../../../models/OneVisitModel';
import {ToastrService} from 'ngx-toastr';

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
  tableHeaders = ['Godzina', 'Dodatkowy opis', 'Szczegóły', 'Odwołaj wizytę'];
  visitTableHeaders = ['Od godziny', 'Do godziny', 'Stan', 'Opis'];
  doctorVisits: OneVisitModel[];
  oneDayDescription: string;

  constructor(private doctorService: DoctorService, private route: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.visitDate = this.route.snapshot.paramMap.get('date');

    this.doctorService.getDoctorDatesById(sessionStorage.getItem('accountId')).subscribe(value => {
      this.doctorDates = value;

      for (let i = 0; i < this.doctorDates.days.length; i++) {
        if (this.doctorDates.days[i].date.substring(0, 10) === this.visitDate) {
          this.oneDay = this.doctorDates.days[i];
          this.doctorVisits = this.oneDay.listOfOneVisitEntities;
          this.visitsToAccept = this.oneDay.listOfVisitsToApprove;
          this.oneDayDescription = this.oneDay.oneDayDescription;
        }
      }
    });
  }

  cancelVisitToAccept(visitId: number) {
    this.doctorService.cancelOneVisitToAccept(visitId).subscribe(() => {
      this.toastr.success('Anulowano wizytę!');
      this.ngOnInit();
    }, error1 => console.log(error1.error.message));
  }

  changeOneDayDescription(oneDayDescription: string) {
    this.doctorService.changeOneDayDescription(this.oneDay.dateId, oneDayDescription).subscribe(() => {
      this.toastr.success('Zmieniono opis dnia!');
    });
  }
}
