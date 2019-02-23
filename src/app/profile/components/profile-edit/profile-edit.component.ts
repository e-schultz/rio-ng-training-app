import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      averageNumberOfHoursPerDay: ['', [Validators.min(0), Validators.max(24)]]
    });
  }

  ngOnInit() {}
}
