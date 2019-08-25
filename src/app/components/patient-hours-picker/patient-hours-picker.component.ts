import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../services/doctor.service';
import {DoctorModel} from '../../models/DoctorModel';

@Component({
  selector: 'app-patient-hours-picker',
  templateUrl: './patient-hours-picker.component.html',
  styleUrls: ['./patient-hours-picker.component.scss']
})
export class PatientHoursPickerComponent implements OnInit {
  date: string;
  tableHeaders: string[] = ['Czas', 'Stan', 'Rezerwuj'];
  doctors: DoctorModel[];

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date');
    console.log(this.date);

    this.doctorService.getAllDoctors().subscribe(value => {
      this.doctors = value;
    });

  }

}
