import { Component } from '@angular/core';

import { ForgotPasswordFormComponent } from '../../components/forgot-password-form/forgot-password-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BackgroundComponent } from '../../components/background/background.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [
    ForgotPasswordFormComponent,
    HeaderComponent,
    BackgroundComponent,
    FooterComponent,
  ],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  constructor() {}
}
