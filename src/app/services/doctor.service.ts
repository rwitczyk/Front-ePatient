import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DoctorModel} from '../models/DoctorModel';
import {DoctorDatesModel} from '../models/DoctorDatesModel';
import {BookAVisitModel} from '../models/BookAVisitModel';
import {OneVisitModel} from '../models/OneVisitModel';
import {DoctorTimetableModel} from '../models/DoctorTimetableModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }

  getAllDoctors() {
    return this.http.get<DoctorModel[]>(environment.backendUrl + '/api/doctors');
  }

  addDoctorAccount(doctor: DoctorModel) {
    return this.http.post(`${environment.backendUrl}/api/doctor/add`, doctor);
  }

  getDoctorDatesById(doctorId: string) {
    return this.http.get<DoctorDatesModel>(environment.backendUrl + '/api/doctor/' + doctorId);
  }

  getDoctorAccountById(doctorId: string) {
    return this.http.get<DoctorModel>(environment.backendUrl + '/api/doctor/' + doctorId);
  }

  sendQuestionAboutReservationVisit(bookAVisit: BookAVisitModel) {
    return this.http.post<BookAVisitModel>(environment.backendUrl + '/api/doctor/question-about-book-a-visit', bookAVisit);
  }

  deleteDoctorAccount(selectedDoctorId: number) {
    return this.http.get(environment.backendUrl + '/api/doctor/delete/' + selectedDoctorId);
  }

  getBookAVisitByVisitId(visitId: string) {
    return this.http.get<BookAVisitModel>(environment.backendUrl + '/api/visit/' + visitId);
  }

  approveBookAVisit(oneVisit: OneVisitModel) {
    return this.http.post(environment.backendUrl + '/api/visit/approve', oneVisit);
  }

  createEmptyDoctorTimetableForOneDay(doctorTimeTableModel: DoctorTimetableModel) {
    return this.http.post(environment.backendUrl + '/api/doctor/create-auto-timetable-for-doctor', doctorTimeTableModel);
  }

  createEmptyOneVisit(oneVisitModel: OneVisitModel) {
    return this.http.post(environment.backendUrl + '/api/doctor/create-one-visit', oneVisitModel);
  }

  cancelOneVisitToAccept(visitId: number) {
    return this.http.post(environment.backendUrl + '/api/doctor/cancelOneVisitToAccept/' + visitId, '');
  }
}
