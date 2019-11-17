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
  actualDay: number;
  actualMonth: number;
  actualYear: number;
  today: string;

  doctorDatesModel: DoctorDatesModel;

  constructor(private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit() {
    this.actualDate = new Date();
    this.doctorService.getDoctorDatesById(sessionStorage.getItem('accountId')).subscribe(value => {
        this.doctorDatesModel = value;

        this.actualDay = (this.actualDate.getDate());
        this.actualMonth = (this.actualDate.getMonth() + 1);
        this.actualYear = (this.actualDate.getFullYear());
        this.today = this.actualYear + '-' + this.actualMonth + '-' + this.actualDay;
        this.actualDay = this.actualDay - 1;

        for (let i = 0; i < 60; i++) {
          if (this.doctorDatesModel.days[i].date >= this.today) {
            this.actualDay = (this.actualDay + 1);

            if (this.doctorDatesModel.days[i].visitsFromTime === null) {
              this.calendarEvents.push({
                title: ' - ',
                date: this.actualYear + '-' + this.actualMonth + '-' + this.actualDay
              });
            } else {
              this.calendarEvents.push({
                title: this.doctorDatesModel.days[i].visitsFromTime.substring(0, this.doctorDatesModel.days[i].visitsFromTime.length - 3) +
                  ' - ' + this.doctorDatesModel.days[i].visitsToTime.substring(0, this.doctorDatesModel.days[i].visitsToTime.length - 3),
                date: this.actualYear + '-' + this.actualMonth + '-' + this.actualDay
              });
            }
          }

        }
      }
    );
  }

  handleDateClick(arg) {
    this.router.navigate(['doctor-visits-for-one-day/' + arg.dateStr]);
  }
}
