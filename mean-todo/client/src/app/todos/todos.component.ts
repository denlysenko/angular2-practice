import { Component, OnInit } from "@angular/core";
import { TodoService } from "./todo.service";
import { Todo } from "../shared/todo";

@Component({
  selector: 'todos',
  template: require('./todos.component.html'),
  providers: [ TodoService ]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTodos()
      .subscribe(
        todos => this.todos = todos,
        err => console.log(err)
      );
  }

  addTodo(text: string) {
    const todo = new Todo(text);
    this._todoService.saveTodo(todo)
      .subscribe(
        res => {
          this.todos.push(res);
        },
        err => console.log(err)
      );
  }

  setEditState(todo, state) {
    if (state) {
      todo.isEditMode = state;
    } else {
      delete todo.isEditMode;
    }
  }

  updateStatus(todo: Todo) {
    const updatedTodo = {
      _id: todo._id,
      text: todo.text,
      isCompleted: !todo.isCompleted
    };

    this._todoService.updateTodo(updatedTodo)
      .subscribe(
        () => {
          todo.isCompleted = !todo.isCompleted;
        },
        err => console.log(err)
      );
  }

  updateText(event: any, todo: Todo) {
    todo.text = event.target.value;

    const updatedTodo = {
      _id: todo._id,
      text: todo.text,
      isCompleted: todo.isCompleted
    };

    this._todoService.updateTodo(updatedTodo)
      .subscribe(
        () => {
          this.setEditState(todo, false);
        },
        err => console.log(err)
      );
  }

  deleteTodo(todo: Todo) {
    this._todoService.deleteTodo(todo._id)
      .subscribe(
        () => {
          this.todos.splice(this.todos.indexOf(todo), 1);
        },
        err => console.log(err)
      )
  }
}
