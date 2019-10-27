import {OneVisitModel} from './OneVisitModel';
import {BookAVisitModel} from './BookAVisitModel';

export class DateModel {
  dateId: number;
  date: string;
  visitsFromTime: string;
  visitsToTime: string;
  listOfOneVisit: OneVisitModel[];
  listOfVisitsToApprove: BookAVisitModel[];
}
