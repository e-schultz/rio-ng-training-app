import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    console.log('game form constructor');
  }
  @Input('group') formGroup: FormGroup;
  @Input('groupName') formGroupName: string;
  form: FormGroup;
  static buildControl() {
    return new FormGroup({
      street1: new FormControl(),
      street2: new FormControl(),
      city: new FormControl()
    });
  }

  ngOnInit() {
    this.form = GameFormComponent.buildControl();
    this.formGroup.addControl(this.formGroupName, this.form);
  }
}
