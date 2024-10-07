import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faInfoCircle,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  mail = 'name@flowbite.com';
  isOpen = false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
}
