import { Component, VERSION } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  // Standalone Component (syntax could change in the future)
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [],

  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Angular ' + VERSION.major + ' Demo';

  // Typed (only reactive) forms in Angular 14
  public form = new FormGroup({
    email: new FormControl<string | null>(null),
    age: new FormControl<number | null>(null),
  });

  /*
  // Fallback (when updating existing app to 14):
  // $ ng update should replace this automatically

  public form = new UntypedFormGroup({
    email: new UntypedFormControl(null),
    age: new UntypedFormControl(null),
  });
  */

  /*
  // Before Angular 14:

    public form = new FormGroup({
      email: new FormControl(null),
      age: new FormControl(null),
    });
  */

  onSubmit() {
    console.log(this.form.value);
    //console.log(this.form.value.email.length);
  }
}
