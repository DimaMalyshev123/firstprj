import { Todo, State } from './../models/todo';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { TodoService } from './../todo.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actionsTodos from '../actions/todo.actions';

@Component({
  selector: 'app-input-todos',
  templateUrl: './input-todos.component.html',
  styleUrls: ['./input-todos.component.css']
})
export class InputTodosComponent implements OnInit {

  CurrentEl: Todo = { title: '', description: '', _id: '', completed: false };
  isLoading: boolean = false;
  filter: string = 'all';
  modeFormAdd: boolean = true;
  ButtonText: string = 'Add';
  toDoList: Todo[] = [];
  nothingTodo: boolean;
  remove: boolean = false;
  stateTodo$ : Observable<State>;
  _state : State;

  constructor(private testService: TestService, private todoService: TodoService,
    private store: Store<{ State }>) {

    this.stateTodo$ = store.pipe(select('todoState'));
    this.stateTodo$.subscribe((state) => {
      this._state = state;
    });
    console.log(this._state);

  }

  ngOnInit() {
    this.todoService.getAllTodo().subscribe((res) => {
      this.updateList(res);
    });

  }

  updateList(res: Todo[]) {
    this.toDoList = [];
    this.nothingTodo = true;

    for (let i = 0; i < res.length; i++) {
      this.toDoList.push(res[i]);
    }
    if (this.toDoList.length) this.nothingTodo = false;
    this.isLoading = true;
  }

  addToDo(todos: Todo): void {
    this.isLoading = false;
    this.todoService.addTodo(todos).subscribe((res) => {
      this.updateList(res);

      this.store.dispatch(actionsTodos.addTodo({ todoList: this.toDoList }));
    });

    
    const msg = 'Title:' + todos.title + '. Record successfully added!';
    this.testService.openSnackBar(msg, 'Done');
  }


  changeFilter(value: string): void {
    this.filter = value;
    //add filtered
    this.store.dispatch(actionsTodos.changeFilter({todoList: null, filter : value}));
  }

  toggleText(id: string): void {
    if (!this.remove) {
      for (let i = 0; i < this.toDoList.length; i++) {
        if (this.toDoList[i]._id == id) {
          this.CurrentEl = this.toDoList[i];

          this.store.dispatch(actionsTodos.selectedTodo({selectTodo : this.CurrentEl}));

          this.modeFormAdd = false;
          this.ButtonText = 'Edit';
        }
      }
    }
    this.remove = false;
  }

  removeTodos(id: string): void {
    this.isLoading = false;
    this.todoService.deleteTodo(id).subscribe((res) => {
      this.updateList(res);

      this.store.dispatch(actionsTodos.deleteTodo({todoList : this.toDoList}));
    });

    const msg = 'Record successfully deleted!';
    this.testService.openSnackBar(msg, 'Done');
    this.remove = true;
  }

  allCompleted(): void {
    this.isLoading = false;
    this.todoService.allCompleted().subscribe((res) => {
      this.updateList(res);
    });
  }

  removeCompleted(): void {
    this.isLoading = false;
    this.todoService.deleteCompleted().subscribe((res) => {
      this.updateList(res);

      this.store.dispatch(actionsTodos.deleteTodo({todoList : this.toDoList}));
    });
  }


  editToDo(todo: Todo) {
    this.isLoading = false;
    this.todoService.editTodo(todo).subscribe((res) => {
      this.updateList(res);

      this.store.dispatch(actionsTodos.editTodo({todoList: this.toDoList}));
    });

    const msg = 'Title:' + todo.title + '. Record successfully edited!';
    this.testService.openSnackBar(msg, 'Done');

    this.modeFormAdd = true;
    this.ButtonText = 'Add';
  }
}
