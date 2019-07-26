import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  @Input() toDoList : Todo[];
  @Input() filter: string;
  @Input() isLoad : boolean;
  @Output() removeTodos = new EventEmitter();
  @Output() toggleText = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
