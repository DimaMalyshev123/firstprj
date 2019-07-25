import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private apiService: ApiService) { }

  public getAllTodo(): Observable<Todo[]> {
    return this.apiService.get('todo');
  }

  public deleteTodo(id: string): Observable<Todo[]> {
    return this.apiService.delete(`delete/${id}`);
  }

  public allCompleted(): Observable<Todo[]> {
    return this.apiService.put(`todo/completed`);
  }

  public deleteCompleted(): Observable<Todo[]> {
    return this.apiService.delete(`delete/completed/true`);
  }

  public addTodo(todo : Todo): Observable<Todo[]> {
    return this.apiService.post('todo/add', todo);
  }

  public editTodo(todo: Todo): Observable<Todo[]> {
    return this.apiService.post('todo/edit', todo);
  }

}
