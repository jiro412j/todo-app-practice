import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: any;

  @Output()
  deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  markAsDone() {
    this.todo.is_done = !this.todo.is_done;
  }

  deleteTodo() {
    this.deleted.emit(this.todo.id);
  }
}
