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

  constructor() {
  }

  ngOnInit() {
  }

  handleDateClick(arg) {
    this.calendarEvents.push({
      title: '8:00 - 14:00', date: arg.dateStr
    });
  }
}
