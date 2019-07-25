import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  public form: FormGroup;
  public selectedTodo: Todo;
  @Input() btnText : string;

  @Input() set todo(value: Todo) {
    this.selectedTodo = value;
    this.initForm(this.selectedTodo);
  }

  @Output() function = new EventEmitter <object>();


  
  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  initForm(todo?: Todo) {
    this.form = new FormGroup({
      title: new FormControl(todo ? todo.title : '',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
      description: new FormControl(todo ? todo.description : '', [Validators.required, Validators.minLength(10), Validators.maxLength(140)]),
      completed : new FormControl(todo ? todo.completed : false)
    });
  }
  
  clearForm() : void {
   // this.form.reset();
    this.form.controls.title.setValue('');
    this.form.controls.description.setValue('');
    this.form.controls.completed.setValue(false);
  }

  onFunction() {
    if (this.btnText == 'Add')
      this.function.emit({ title: this.form.value.title, description: this.form.value.description, completed: this.form.value.completed });

    if (this.btnText == 'Edit')
      this.function.emit({_id: this.selectedTodo._id, title: this.form.value.title, description: this.form.value.description, completed: this.form.value.completed});
  }
}
