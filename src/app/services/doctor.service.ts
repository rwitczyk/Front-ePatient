import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DoctorModel} from '../models/DoctorModel';
import {DoctorDatesModel} from '../models/DoctorDatesModel';
import {BookAVisitModel} from '../models/BookAVisitModel';

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
}
