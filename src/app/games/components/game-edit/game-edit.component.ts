import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { map, scan, pluck, tap, mergeMap, distinctUntilChanged } from 'rxjs/operators';
import { GameFormComponent } from '../game-form/game-form.component';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit, OnDestroy {
  id: number;
  form: FormGroup;
  expenseTotal$: Observable<number>;
  constructor(private router: ActivatedRoute, private fb: FormBuilder) {}

  get expenses() {
    return this.form.get('expenses') as FormArray;
  }
  get addresses() {
    return this.form.get('addresses') as FormArray;
  }
  createExpenseItem() {
    return this.fb.group({
      expenseType: '',
      expenseTotal: undefined
    });
  }
  ngOnInit() {
    this.form = this.fb.group({
      description: '',
      expenses: this.fb.array([this.createExpenseItem()]),
      addresses: this.fb.array([GameFormComponent.buildControl()])
    });
    this.router.paramMap.subscribe(n => {
      this.id = +n.get('id');
    });
    this.expenseTotal$ = this.expenses.valueChanges.pipe(map(n => n.reduce((acc, val) => (acc += val.expenseTotal), 0)));
  }
  addAddress() {
    this.addresses.push(GameFormComponent.buildControl());
  }
  ngOnDestroy() {
    console.log('destroyed');
  }
  onSubmit() {
    console.log(this.form);
  }
  prefill() {
    const value = {
      description: 'this is magic',
      expenses: [
        {
          expenseType: 'SomeType',
          expenseTotal: 5
        },
        {
          expenseType: 'Another',
          expenseTotal: 4
        }
      ]
    };
    this.reset();
    value.expenses.forEach(n => {
      this.expenses.push(this.createExpenseItem());
    });
    this.form.patchValue(value);
  }
  addItem() {
    this.expenses.push(this.createExpenseItem());
  }
  reset() {
    this.form.reset({});

    while (this.expenses.length !== 0) {
      this.expenses.removeAt(0);
    }
  }
}
