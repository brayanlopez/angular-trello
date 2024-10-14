import { Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/pages/login/login.component';
import { BoardComponent } from './modules/boards/pages/board/board.component';
import { BoardsComponent } from './modules/boards/pages/boards/boards.component';

export const routes: Routes = [
  {
    path: 'login',
    // TODO: check loadChildren import method
    // loadChildren: () =>
    //   import('./modules/auth/pages/login/login.component').then(
    //     (m) => m.LoginComponent
    //   ),
    component: LoginComponent,
  },
  { path: 'board', component: BoardComponent },
  { path: 'boards', component: BoardsComponent },
];
