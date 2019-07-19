import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TestService } from '../services/test.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-input-todos',
  templateUrl: './input-todos.component.html',
  styleUrls: ['./input-todos.component.css']
})
export class InputTodosComponent implements OnInit {
  
  toDoForm = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(140)]),
    completed : new FormControl('')
  });
  

  filter: string = 'all';
  
  addOrEdit: string = "add";
  id : number ;
  toDoList: Todo[] = [
    { id: this.testService.generateRandomString(), title: "do something", completed: false, description: "" },
    { id: this.testService.generateRandomString(), title: "do something end", completed: true, description: "" }];

  sortList: Todo[] = [];

  constructor(private testService: TestService) { }

  ngOnInit() {
    console.log(this.toDoForm);
  }

  log() {
    console.log(this.toDoForm);
  }

  addToDo() : void {
    if (this.toDoForm.valid) {
      this.toDoList.push({ id: this.testService.generateRandomString(), title: this.toDoForm.controls.title.value, 
        completed: this.toDoForm.controls.completed.value, description: this.toDoForm.controls.description.value });
      const msg = "Title:" + this.toDoForm.controls.title.value + ". Record successfully added!";
      this.testService.openSnackBar(msg, 'Done');
      this.toDoForm.controls.title.setValue('');
      this.toDoForm.controls.description.setValue('');
      this.toDoForm.controls.completed.setValue(false);
    }
  }


  changeFilter(value: string): void {
    this.filter = value;
  }

  toggleText(id: string): void {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == id) {
        this.toDoForm.controls.title.setValue(this.toDoList[i].title);
        this.toDoForm.controls.description.setValue(this.toDoList[i].description);
        this.toDoForm.controls.completed.setValue(this.toDoList[i].completed);
        this.id = i;
        this.addOrEdit = 'edit';
      }
    }
  }

  removeTodos(id: string): void {
    this.toDoList = this.toDoList.filter(function (todos: Todo) {
      if (todos.id != id) return todos;
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
    this.toDoList = this.toDoList.filter(function (todos: Todo) {
      if (!todos.completed) return todos;
    });
  }

  clearForm() : void {
    this.toDoForm.controls.title.setValue('');
    this.toDoForm.controls.description.setValue('');
    this.toDoForm.controls.completed.setValue(false);
    this.addOrEdit = 'add';
  }


  editToDo()
  {
    if (this.toDoForm.valid) {
      this.toDoList[this.id].title = this.toDoForm.controls.title.value;
      this.toDoList[this.id].completed = this.toDoForm.controls.completed.value;
      this.toDoList[this.id].description = this.toDoForm.controls.description.value;

      const msg = "Title:" + this.toDoList[this.id].title + ". Record successfully edited!";
      this.testService.openSnackBar(msg, 'Done');

      this.toDoForm.controls.title.setValue('');
      this.toDoForm.controls.description.setValue('');
      this.toDoForm.controls.completed.setValue(false);
      this.id = null;
    }
    this.addOrEdit = 'add';
  }
}
