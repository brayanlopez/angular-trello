import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';
import { BtnComponent } from '../../../shared/components/button/btn.component';

@Component({
  standalone: true,
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
  imports: [FontAwesomeModule, ReactiveFormsModule, BtnComponent],
})
export class RecoveryFormComponent {
  form: any;
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.nonNullable.group(
      {
        newPassword: ['', [Validators.minLength(6), Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [
          CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
        ],
      },
    );
  }

  recovery() {
    if (this.form.valid) {
      // Todo
    } else {
      this.form.markAllAsTouched();
    }
  }
}
