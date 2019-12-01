import {TimeModel} from './TimeModel';

export class OneVisitModel {
  bookAVisitModelId: string;
  doctorId: string;
  patientId: string;
  fromTime: TimeModel;
  toTime: TimeModel;
  visitDate: string;
  isBusy: string;
  additionalDescription: string;
}
