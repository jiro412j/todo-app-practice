import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList = [];

  addTaskToList(task) {
    this.todoList.push({
      text: task,
      id: Math.floor(Math.random() * Math.floor(10000)),
      is_done: false
    });
  }

  deleteTodo(id) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }
}
