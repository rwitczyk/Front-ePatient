import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DoctorService} from '../../../services/doctor.service';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-visits-date-picker',
  templateUrl: './doctor-visits-date-picker.component.html',
  styleUrls: ['./doctor-visits-date-picker.component.scss']
})
export class DoctorVisitsDatePickerComponent implements OnInit {
  // https://fullcalendar.io/docs/angular
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarEvents = [];
  eventMyStyle = 'my-calendar-event-style';
  actualDate: Date;
  actualDay: string;
  actualMonth: string;
  actualYear: string;

  doctorDatesModel: DoctorDatesModel;

  constructor(private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit() {
    this.actualDate = new Date();
    this.doctorService.getDoctorDatesById(sessionStorage.getItem('accountId')).subscribe(value => {
        this.doctorDatesModel = value;
      }
    );
    // TODO update calendar Events title

    for (let i = 0; i < 30; i++) {
      this.actualDay = (this.actualDate.getDate() + i).toString();
      this.actualMonth = (this.actualDate.getMonth() + 1).toString();
      this.actualYear = (this.actualDate.getFullYear()).toString();

      if (this.actualDay.toString().length < 2) {
        this.actualDay = '0' + this.actualDay.toString();
      }

      this.calendarEvents.push({
        title: '8:00 - 14:00', date: this.actualYear + '-' + this.actualMonth + '-' + (this.actualDay)
      });
    }
  }

  handleDateClick(arg) {
    console.log(arg.dateStr);
    this.router.navigate(['doctor-visits-for-one-day/' + arg.dateStr]);
  }
}
