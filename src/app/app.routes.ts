import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: 'boards', component: BoardsComponent },
];
