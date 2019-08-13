import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Router} from '@angular/router'; // for dateClick

@Component({
  selector: 'app-patient-date-picker',
  templateUrl: './patient-date-picker.component.html',
  styleUrls: ['./patient-date-picker.component.scss']
})
export class PatientDatePickerComponent implements OnInit {
  // https://fullcalendar.io/docs/angular
  calendarPlugins = [dayGridPlugin, interactionPlugin];

  constructor(private router: Router) {
  }

  handleDateClick(arg) { // handler method
    this.router.navigate(['/patient-hours-picker/' + arg.dateStr]);
  }

  ngOnInit(): void {
  }
}
