import { Component } from '@angular/core';

import { BtnComponent } from '../../../shared/components/button/btn.component';
import { BackgroundComponent } from '../../components/background/background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BtnComponent,
    BackgroundComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor() {}

  ngOnInit(): void {}
}
