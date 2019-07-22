import { Todo } from './../models/todo';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-input-todos',
  templateUrl: './input-todos.component.html',
  styleUrls: ['./input-todos.component.css']
})
export class InputTodosComponent implements OnInit {
  
  CurrentEl : Todo = {title: "",description: "", id : "", completed:false};;

  filter: string = 'all';
  modeFormAdd : boolean = true;
  ButtonText: string = "Add";
  id : number ;
  toDoList: Todo[] = [
    { id: this.testService.generateRandomString(), title: "do something", completed: false, description: "sdadadadadadad1" },
    { id: this.testService.generateRandomString(), title: "do something end", completed: true, description: "sdadadadadadad2" }];

  sortList: Todo[] = [];

  constructor(private testService: TestService) { }

  ngOnInit() {
    
  }

  addToDo(todos: Todo): void {
    if (todos.title) {
      this.toDoList.push({
        id: this.testService.generateRandomString(), title: todos.title,
        completed: todos.completed, description: todos.description
      });

      const msg = "Title:" + todos.title + ". Record successfully added!";
      this.testService.openSnackBar(msg, 'Done');
    }

  }


  changeFilter(value: string): void {
    this.filter = value;
  }

  toggleText(id: string): void {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == id) {
        this.CurrentEl = this.toDoList[i];
        console.log(this.CurrentEl);
        this.id = i;
        this.modeFormAdd = false;
        this.ButtonText = 'Edit';
      }
    }
  }

  removeTodos(id: string): void {
    this.toDoList = this.toDoList.filter((todos: Todo) => {
      if (todos.id != id) return true;
    });
    const msg = "Record successfully deleted!";
    this.testService.openSnackBar(msg, 'Done');
  }

  allCompleted(): void {
    for (let i = 0; i < this.toDoList.length; i++) {
      this.toDoList[i].completed = true;
    }
  }

  removeCompleted(): void {
    this.toDoList = this.toDoList.filter( (todos: Todo) => {
      if (!todos.completed) return true;
    });
  }


  editToDo(todos : Todo)
  {
    console.log(todos);
    this.toDoList = this.toDoList.map((todo: Todo) => {
      if(todo.id == todos.id) {
        todo = todos;
      }
      return todo;
    });
    const msg = "Title:" + this.toDoList[this.id].title + ". Record successfully edited!";
    this.testService.openSnackBar(msg, 'Done');

    this.id = null;
    this.modeFormAdd  = true;
    this.ButtonText = 'Add';
  }
}
