import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-some-button',
  templateUrl: './some-button.component.html',
  styleUrls: ['./some-button.component.css']
})
export class SomeButtonComponent implements OnInit {

  @Input() buttonText: string;
  @Input() disabledBtn : boolean = false;
  @Output() someFunction = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
