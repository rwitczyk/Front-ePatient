import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-hours-picker',
  templateUrl: './patient-hours-picker.component.html',
  styleUrls: ['./patient-hours-picker.component.scss']
})
export class PatientHoursPickerComponent implements OnInit {
  date: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date');
    console.log(this.date);
  }

}
