import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-input-todos',
  templateUrl: './input-todos.component.html',
  styleUrls: ['./input-todos.component.css']
})
export class InputTodosComponent implements OnInit {

  filter: string = 'all';
  title: string = '';
  description : string = "" ;
  completed : boolean ;
  addOrEdit: string = "add";
  id : number ;
  toDoList: Todo[] = [
    { id: this.testService.generateRandomString(), title: "do something", completed: false, description: "" },
    { id: this.testService.generateRandomString(), title: "do something end", completed: true, description: "" }];

  sortList: Todo[] = [];

  constructor(private testService: TestService) { }

  ngOnInit() {
  }

  addToDo() : void {
    if (this.title) {
      this.toDoList.push({ id: this.testService.generateRandomString(), title: this.title, completed: this.completed, description: this.description });
      this.title = '';
      this.description = '';
      this.completed = false;
    }
  }

  changeFilter(value: string): void {
    this.filter = value;
  }

  toggleText(id: string): void {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == id) {
        this.title = this.toDoList[i].title;
        this.completed = this.toDoList[i].completed;
        this.description = this.toDoList[i].description;
        this.id = i;
        this.addOrEdit = 'edit';
      }
    }
  }

  removeTodos(id: string): void {
    this.toDoList = this.toDoList.filter(function (todos: Todo) {
      if (todos.id != id) return todos;
    });
  }

  allCompleted(): void {
    for (let i = 0; i < this.toDoList.length; i++) {
      this.toDoList[i].completed = true;
    }
  }

  removeCompleted(): void {
    this.toDoList = this.toDoList.filter(function (todos: Todo) {
      if (!todos.completed) return todos;
    });
  }
  clearForm() : void {
    this.title = '';
    this.completed = false;
    this.description = '';
    this.addOrEdit = 'add';
  }

  editToDo()
  {
    if (this.title) {
      this.toDoList[this.id].title = this.title;
      this.toDoList[this.id].completed = this.completed;
      this.toDoList[this.id].description = this.description;
      this.title = '';
      this.description = '';
      this.completed = false;
      this.id = null;
    }
    this.addOrEdit = 'add';
  }
}
