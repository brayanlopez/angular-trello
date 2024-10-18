import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/background/background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor() {}
}
