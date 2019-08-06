import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PatientModel} from '../models/PatientModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  addPatientAccount(patient: PatientModel) {
    return this.http.post(`${environment.backendUrl}/api/patient/add`, patient);
  }
}
