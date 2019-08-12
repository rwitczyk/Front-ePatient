import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-patient-date-picker',
  templateUrl: './patient-date-picker.component.html',
  styleUrls: ['./patient-date-picker.component.scss']
})
export class PatientDatePickerComponent implements OnInit {
  // https://fullcalendar.io/docs/angular
  calendarPlugins = [dayGridPlugin];

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
    console.log(arg.dateStr);
  }

  ngOnInit(): void {
  }
}
