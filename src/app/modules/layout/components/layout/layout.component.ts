import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor() {}
}
