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
  doctorId: string;

  doctorDatesModel: DoctorDatesModel;

  constructor(private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit() {
    this.doctorId = sessionStorage.getItem('accountId');

    this.doctorService.getDoctorDatesById(this.doctorId).subscribe(value => {
        this.doctorDatesModel = value;
        console.log(this.doctorDatesModel);

        for (let i = 0; i < 90; i++) {
          if (this.doctorDatesModel.days[i].visitsFromTime === null) {
            console.log('No visit: ' + this.doctorDatesModel.days[i].date);
            this.calendarEvents.push({
              title: ' - ',
              date: this.doctorDatesModel.days[i].date.substring(0, 10)
            });
          } else {
            console.log('Visits: ' + this.doctorDatesModel.days[i].date);
            this.calendarEvents.push({
              title: this.doctorDatesModel.days[i].visitsFromTime.substring(0, this.doctorDatesModel.days[i].visitsFromTime.length - 3) +
                ' - ' + this.doctorDatesModel.days[i].visitsToTime.substring(0, this.doctorDatesModel.days[i].visitsToTime.length - 3),
              date: this.doctorDatesModel.days[i].date.substring(0, 10)
            });
          }
        }

      }
    );
  }

  handleDateClick(arg) {
    this.router.navigate(['doctor-visits-for-one-day/' + arg.dateStr]);
  }
}
