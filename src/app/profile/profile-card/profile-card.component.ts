import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { InvokeFunctionExpr } from "@angular/compiler";
import { Profile } from "../profile-service/profile.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-profile-card",
  templateUrl: "./profile-card.component.html",
  styleUrls: ["./profile-card.component.scss"]
})
export class ProfileCardComponent implements OnInit, OnChanges {
  @Input() profile: Profile;
  @Input() isEdit: boolean = false;
  @Output() profileChange = new EventEmitter<Profile>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", [Validators.required]],
      averageNumberOfHoursPerDay: [
        "",
        [Validators.required, Validators.min(0), Validators.max(24)]
      ]
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.profile.currentValue !== "undefined") {
      this.form.patchValue(changes.profile.currentValue);
    }
  }
  onSubmit() {
    this.profileChange.emit(this.form.value);
  }
}
