import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../../../shared/components/button/btn.component';

@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  imports: [FontAwesomeModule, BtnComponent, ReactiveFormsModule],
})
export class LoginFormComponent {
  form: any;
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }
}
