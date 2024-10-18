import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';
import { BtnComponent } from '../../../shared/components/button/btn.component';

@Component({
  standalone: true,
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  imports: [FontAwesomeModule, BtnComponent, ReactiveFormsModule],
})
export class RegisterFormComponent {
  form;
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.nonNullable.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [
          CustomValidators.MatchValidator('password', 'confirmPassword'),
        ],
      },
    );
  }

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      console.log(name, email, password);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
