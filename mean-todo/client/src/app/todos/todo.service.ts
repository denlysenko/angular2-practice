import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  constructor(private _http: Http) { }

  getTodos() {
    return this._http.get('/api/v1/todos')
      .map(res => res.json());
  }

  saveTodo(todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/v1/todos', JSON.stringify(todo), { headers: headers })
      .map(res => res.json());
  }

  updateTodo(todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const id = todo._id;
    delete todo._id; // remove _id due to mongo error
    return this._http.put(`/api/v1/todos/${id}`, JSON.stringify(todo), { headers: headers })
      .map(res => res.json());
  }

  deleteTodo(id) {
    return this._http.delete(`/api/v1/todos/${id}`)
      .map(res => res.json());
  }
}
