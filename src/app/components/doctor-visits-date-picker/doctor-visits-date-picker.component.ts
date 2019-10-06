import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

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

  constructor() {
  }

  ngOnInit() {
    this.actualDate = new Date();

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
    // navigate to another component
  }
}
