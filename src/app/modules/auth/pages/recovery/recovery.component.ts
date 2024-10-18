import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/background/background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecoveryFormComponent } from '../../components/recovery-form/recovery-form.component';

@Component({
  standalone: true,
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  imports: [
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    RecoveryFormComponent,
  ],
})
export class RecoveryComponent {
  constructor() {}
}
