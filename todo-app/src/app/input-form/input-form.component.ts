import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @Input() form : FormGroup;
  @Input() btnRender : string;
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() clear = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
