import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-manage-timetable-doctor',
  templateUrl: './manage-timetable-doctor.component.html',
  styleUrls: ['./manage-timetable-doctor.component.scss']
})
export class ManageTimetableDoctorComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarEvents = [];
  eventMyStyle = 'my-calendar-event-style';

  doctorId: string;

  actualDate: Date;
  actualDay: number;
  actualMonth: number;
  actualYear: number;
  today: string;

  doctorDatesModel: DoctorDatesModel;

  constructor(private router: Router, private route: ActivatedRoute, private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id');

    this.actualDate = new Date();
    this.doctorService.getDoctorDatesById(this.doctorId).subscribe(value => {
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


  handleDateClick(event: any) {
    this.router.navigate(['/manage-one-day-doctor-timetable/' + event.dateStr + '/' + this.doctorId]);
  }
}
