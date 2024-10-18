import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from '../../../shared/components/button/btn.component';

@Component({
  standalone: true,
  selector: 'app-forgot-password-form',
  imports: [ReactiveFormsModule, BtnComponent],
  templateUrl: './forgot-password-form.component.html',
})
export class ForgotPasswordFormComponent {
  form: any;
  status: string = 'init';
  emailSent = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      // TODO: Connect
    } else {
      this.form.markAllAsTouched();
    }
  }
}
