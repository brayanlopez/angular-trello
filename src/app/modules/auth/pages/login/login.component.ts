import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/button/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor() {}

  ngOnInit(): void {}
}
