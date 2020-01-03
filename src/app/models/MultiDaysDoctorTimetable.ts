import {TimeModel} from './TimeModel';

export class MultiDaysDoctorTimetable {
  doctorId: number;

  mondayCheckbox: boolean;
  tuesdayCheckbox: boolean;
  wednesdayCheckbox: boolean;
  thursdayCheckbox: boolean;
  fridayCheckbox: boolean;

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
}
