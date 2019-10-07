import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../services/doctor.service';
import {DoctorModel} from '../../models/DoctorModel';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-doctors-management-by-admin',
  templateUrl: './doctors-management-by-admin.component.html',
  styleUrls: ['./doctors-management-by-admin.component.scss']
})
export class DoctorsManagementByAdminComponent implements OnInit {
  selectedDoctorId: number;
  doctors: DoctorModel[];
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarEvents = [];
  eventMyStyle = 'my-calendar-event-style';

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {

    this.doctorService.getAllDoctors().subscribe(value => {
      this.doctors = value;
    });
  }

  selectOption() {
    console.log('Doctor ID: ' + this.selectedDoctorId);
    if (this.selectedDoctorId.toString().length > 0) {
      // update doctor timetable
    }
  }

  handleDateClick($event) {
  }
}
