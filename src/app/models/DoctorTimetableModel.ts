import {TimeModel} from './TimeModel';

export class DoctorTimetableModel {
  doctorId: number;
  timetableDate: string;
  minutes: TimeModel;
  fromTime: TimeModel;
  toTime: TimeModel;
}
