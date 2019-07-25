import { Todo } from './../models/todo';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-input-todos',
  templateUrl: './input-todos.component.html',
  styleUrls: ['./input-todos.component.css']
})
export class InputTodosComponent implements OnInit {

  CurrentEl: Todo = { title: "", description: "", _id: "", completed: false };
  responseServer : boolean = false;
  filter: string = 'all';
  modeFormAdd: boolean = true;
  ButtonText: string = "Add";;
  toDoList: Todo[] = [];
  nothingTodo: boolean;
  remove : boolean = false;

  constructor(private testService: TestService, private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodo().subscribe((res) => {
      this.updateList(res);
    });

  }

  updateList(res: Object) {
    this.toDoList = [];
    this.nothingTodo = true;

    for (let i = 0; i < res.length; i++) {
      this.toDoList.push(res[i]);
    }
    if (this.toDoList.length) this.nothingTodo = false;
    this.responseServer = true;
    console.log(this.toDoList);
  }

  addToDo(todos: Todo): void {
    this.responseServer = false;
    this.todoService.addTodo(todos).subscribe((res) => {
      this.updateList(res);
    });

    const msg = "Title:" + todos.title + ". Record successfully added!";
    this.testService.openSnackBar(msg, 'Done');
  }


  changeFilter(value: string): void {
    this.filter = value;
  }

  toggleText(id: string): void {
    if (!this.remove) {
      for (let i = 0; i < this.toDoList.length; i++) {
        if (this.toDoList[i]._id == id) {
          this.CurrentEl = this.toDoList[i];
          console.log(this.CurrentEl);
          this.modeFormAdd = false;
          this.ButtonText = 'Edit';
        }
      }
    }
    this.remove = false;
  }

  removeTodos(id: string): void {
    this.responseServer = false;
    this.todoService.deleteTodo(id).subscribe((res) => {
      this.updateList(res);
    });
    const msg = "Record successfully deleted!";
    this.testService.openSnackBar(msg, 'Done');
    console.log("remove!");
    console.log(this.toDoList);
    this.remove = true;
  }

  allCompleted(): void {
    this.responseServer = false;
    this.todoService.allCompleted().subscribe((res) => {
      this.updateList(res);
    });
  }

  removeCompleted(): void {
    this.responseServer = false;
    this.todoService.deleteCompleted().subscribe((res) => {
      this.updateList(res);
    });
  }


  editToDo(todo: Todo) {
    this.responseServer = false;
    this.todoService.editTodo(todo).subscribe((res) => {
      this.updateList(res);
    });

    const msg = "Title:" + todo.title + ". Record successfully edited!";
    this.testService.openSnackBar(msg, 'Done');

    this.modeFormAdd = true;
    this.ButtonText = 'Add';
  }
}
