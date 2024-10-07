import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Make dishes',
    },
    {
      id: '2',
      title: 'Buy a unicorn',
    },
    {
      id: '2',
      title: 'Watch Angular Path in Platzi',
    },
  ];
  drop(event: Event) {}

  // drop(event: CdkDragDrop<any[]>) {
  //   moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  // }
}
