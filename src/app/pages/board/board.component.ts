import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, CdkDropList, CdkDropListGroup, CdkDrag],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: Date.now().toString(),
      title: 'Make dishes',
    },
    {
      id: Date.now().toString(),
      title: 'Buy a unicorn',
    },
    {
      id: Date.now().toString(),
      title: 'Watch Angular Path in Platzi',
    },
  ];

  doing: ToDo[] = [
    {
      id: Date.now().toString(),
      title: 'Watch Angular Path in Platzi',
    },
  ];
  done: ToDo[] = [
    {
      id: Date.now().toString(),
      title: 'Watch Angular Path in Platzi',
    },
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
