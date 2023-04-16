import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {



  @Input() todo: Todo | undefined;
  @Input() i: number | undefined;

  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckbox : EventEmitter<Todo> = new EventEmitter()

  constructor() {

  }

  onClick(todo?: Todo) {

    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
    // console.log("triggered thing ", todo);
  }

  onCheckboxClick(todo?:Todo) {
 this.todoCheckbox.emit(todo);

  }



}
