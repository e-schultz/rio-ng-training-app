import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      id: [],
      image: [],
      languageId: [],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      averageNumberOfHoursPerDay: ['', [Validators.required, Validators.min(0), Validators.max(24)]]
    });
  }

  ngOnInit() {
    this.http
      .get<any>('http://localhost:3000/profile')
      .subscribe(({ id, firstName, lastName, averageNumberOfHoursPerDay, image, languageId }) => {
        this.form.setValue({ id, firstName, lastName, averageNumberOfHoursPerDay, image, languageId });
      });
  }
}
