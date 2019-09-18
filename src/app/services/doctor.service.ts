import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DoctorModel} from '../models/DoctorModel';
import {DoctorDatesModel} from '../models/DoctorDatesModel';

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

  getDoctorDatesById(id: number) {
    return this.http.get<DoctorDatesModel>(environment.backendUrl + '/api/doctor/' + id);
  }
}
