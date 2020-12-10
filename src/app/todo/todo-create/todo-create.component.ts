import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  username: string;
  Hours:string;
  Date: string



  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todoService.submit(this.username,this.Hours,this.Date);
    this.username = '';
    this.Hours='';
    this.Date=''
  }

}
