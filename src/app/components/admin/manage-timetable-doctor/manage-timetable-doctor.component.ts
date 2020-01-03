import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorDatesModel} from '../../../models/DoctorDatesModel';
import {DoctorService} from '../../../services/doctor.service';
import {TimeModel} from '../../../models/TimeModel';
import {MultiDaysDoctorTimetable} from '../../../models/MultiDaysDoctorTimetable';
import {ToastrService} from 'ngx-toastr';

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
  doctorDatesModel: DoctorDatesModel;

  mondayCheckbox = false;
  tuesdayCheckbox = false;
  wednesdayCheckbox = false;
  thursdayCheckbox = false;
  fridayCheckbox = false;

  mondayVisitsFrom: TimeModel;
  tuesdayVisitsFrom: TimeModel;
  wednesdayVisitsFrom: TimeModel;
  thursdayVisitsFrom: TimeModel;
  fridayVisitsFrom: TimeModel;

  mondayVisitsTo: TimeModel;
  tuesdayVisitsTo: TimeModel;
  wednesdayVisitsTo: TimeModel;
  thursdayVisitsTo: TimeModel;
  fridayVisitsTo: TimeModel;

  mondayVisitsLength: TimeModel;
  tuesdayVisitsLength: TimeModel;
  wednesdayVisitsLength: TimeModel;
  thursdayVisitsLength: TimeModel;
  fridayVisitsLength: TimeModel;

  rangeDates: string;
  multiDaysDoctorTimetable: MultiDaysDoctorTimetable;

  constructor(private router: Router, private route: ActivatedRoute, private doctorService: DoctorService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id');

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


  handleDateClick(event: any) {
    this.router.navigate(['/manage-one-day-doctor-timetable/' + event.dateStr + '/' + this.doctorId]);
  }

  saveMultiDaysTimetable(value: string) {
    if (value.length === 0) {
      this.toastr.error('Wypełnij zakres dat!');
    } else {
      this.multiDaysDoctorTimetable = new MultiDaysDoctorTimetable();

      this.multiDaysDoctorTimetable.mondayCheckbox = this.mondayCheckbox;
      this.multiDaysDoctorTimetable.tuesdayCheckbox = this.tuesdayCheckbox;
      this.multiDaysDoctorTimetable.wednesdayCheckbox = this.wednesdayCheckbox;
      this.multiDaysDoctorTimetable.thursdayCheckbox = this.thursdayCheckbox;
      this.multiDaysDoctorTimetable.fridayCheckbox = this.fridayCheckbox;

      this.multiDaysDoctorTimetable.mondayVisitsFrom = this.mondayVisitsFrom;
      this.multiDaysDoctorTimetable.tuesdayVisitsFrom = this.tuesdayVisitsFrom;
      this.multiDaysDoctorTimetable.wednesdayVisitsFrom = this.wednesdayVisitsFrom;
      this.multiDaysDoctorTimetable.thursdayVisitsFrom = this.thursdayVisitsFrom;
      this.multiDaysDoctorTimetable.fridayVisitsFrom = this.fridayVisitsFrom;

      this.multiDaysDoctorTimetable.mondayVisitsTo = this.mondayVisitsTo;
      this.multiDaysDoctorTimetable.tuesdayVisitsTo = this.tuesdayVisitsTo;
      this.multiDaysDoctorTimetable.wednesdayVisitsTo = this.wednesdayVisitsTo;
      this.multiDaysDoctorTimetable.thursdayVisitsTo = this.thursdayVisitsTo;
      this.multiDaysDoctorTimetable.fridayVisitsTo = this.fridayVisitsTo;

      this.multiDaysDoctorTimetable.mondayVisitsLength = this.mondayVisitsLength;
      this.multiDaysDoctorTimetable.tuesdayVisitsLength = this.tuesdayVisitsLength;
      this.multiDaysDoctorTimetable.wednesdayVisitsLength = this.wednesdayVisitsLength;
      this.multiDaysDoctorTimetable.thursdayVisitsLength = this.thursdayVisitsLength;
      this.multiDaysDoctorTimetable.fridayVisitsLength = this.fridayVisitsLength;

      this.multiDaysDoctorTimetable.rangeDates = value;
      this.multiDaysDoctorTimetable.doctorId = parseInt(this.doctorId, 10);

      this.doctorService.createMultiDaysDoctorTimetable(this.multiDaysDoctorTimetable).subscribe(() => {
        this.toastr.success('Utworzono pomyślnie harmonogram na wybrany okres czasu');
      }, error1 => console.log(error1.error.message));
    }
  }
}
