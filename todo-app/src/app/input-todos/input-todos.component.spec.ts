import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTodosComponent } from './input-todos.component';

describe('InputTodosComponent', () => {
  let component: InputTodosComponent;
  let fixture: ComponentFixture<InputTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
