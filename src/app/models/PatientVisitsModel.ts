import {TimeModel} from './TimeModel';
import {DoctorModel} from './DoctorModel';

export class PatientVisitsModel {
  bookAVisitModelId: string;
  doctor: DoctorModel;
  patientId: string;
  fromTime: TimeModel;
  toTime: TimeModel;
  visitDate: string;
  isBusy: string;
  additionalDescription: string;
}
