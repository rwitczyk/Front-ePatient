import {TimeModel} from './TimeModel';

export class OneVisitModel {
  bookAVisitModelId: string;
  doctorId: string;
  fromTime: TimeModel;
  toTime: TimeModel;
  visitDate: string;
  isBusy: string;
  additionalDescription: string;
}
