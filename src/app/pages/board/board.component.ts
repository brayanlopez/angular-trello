import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.model';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NavbarComponent,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    DialogModule,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes',
        },
        {
          id: '2',
          title: 'Buy a unicorn',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games',
        },
      ],
    },
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  constructor(private dialog: Dialog) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
    });
  }
}
