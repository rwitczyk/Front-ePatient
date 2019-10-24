import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-timetable-doctor',
  templateUrl: './manage-timetable-doctor.component.html',
  styleUrls: ['./manage-timetable-doctor.component.scss']
})
export class ManageTimetableDoctorComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarEvents = [];
  eventMyStyle = 'my-calendar-event-style';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleDateClick(event: any) {
    this.router.navigate(['/manage-one-day-doctor-timetable/' + event.dateStr]);
  }
}
