import { Component , EventEmitter , Input , Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule , CommonModule , ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  @Input() submitted = false; // Use @Input() to receive submitted state from parent
  @Output() submittedData = new EventEmitter<FormGroup>();
  @Output() submittedChange = new EventEmitter<boolean>();


  PASSWORD_MIN_LENGTH = 8;

  signupForm = new FormGroup({
    pseudo: new FormControl<string>('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required , Validators.email]),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required , Validators.minLength(this.PASSWORD_MIN_LENGTH)]),
    passwordConfirm: new FormControl('', [Validators.required, this.passwordMatchValidator])
  });

  onSubmit() 
  {
    if (this.signupForm.valid) {
      this.submitted = true;
      this.submittedChange.emit(this.submitted);
      this.submittedData.emit(this.signupForm);
    }
    else{
      this.markAllAsDirty(this.signupForm);
    }
  }

  markAllAsDirty(form: FormGroup) {
    if (form !== null && form.controls) { 
      for (const controlName in form.controls) {
        const control = form.get(controlName);
        if (control) { 
          control.markAsDirty();
        }
      }
    }
  }

  passwordMatchValidator(control: FormControl): { [key: string]: boolean } | null {
    const password = control.root.get('password');
    const passwordConfirm = control;
    if (password && password.value !== passwordConfirm.value) {
      return { passwordsDoNotMatch: true };
    }
    return null;
  }
}
