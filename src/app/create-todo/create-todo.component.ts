import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  taskName = '';
  showErrorMessage = false;

  @Output()
  taskAdded = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addTask() {
    if (this.taskName) {
      this.showErrorMessage = false;
      this.taskAdded.emit(this.taskName);
      this.taskName = '';
    } else {
      this.showErrorMessage = true;
    }
  }
}
