import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { all } from 'q';

@Component({
  selector: 'app-input-todos',
  templateUrl: './input-todos.component.html',
  styleUrls: ['./input-todos.component.css']
})
export class InputTodosComponent implements OnInit {

  //conditionList: boolean = true;
  filter: string = 'all';
  title: string = '';
  toDoList : Todo[] = [
    {title : "do something", completed: false, description: ""},
    {title : "do something end", completed: true, description: ""}];
  
  sortList: Todo[] = [];


  // filterList(typeFiltered:boolean)
  // {
  //   this.sortList = this.toDoList.filter(function(todos:Todo) {
  //     if(todos.completed == typeFiltered) return todos;
  //   })
  //   this.conditionList = false;
  // }
  constructor() { }

  ngOnInit() {
  }

  addToDo() {
    if(this.title) {
    this.toDoList.push({title: this.title, completed: false, description:""});
    this.title = '';
    }
    //this.conditionList = true;
  }
  changeFilter(value: string): void {
    this.filter = value;
  }

  toggleText(key:number) {
    this.toDoList[key].completed = !
  }
 

}
