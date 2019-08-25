import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DoctorModel} from '../models/DoctorModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }

  getAllDoctors() {
    return this.http.get<DoctorModel[]>(environment.backendUrl + '/doctors');
  }
}
